let useDefaultImageFlag = false;
let usedDefaultImage = false;

function validateForm() {
    document.getElementById("profile-picture-picker").addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Set the image source to the loaded file
                document.querySelector(".profile-picture-picker-image").src = e.target.result;

                // Prepare UI for cropping
                document.getElementById('disappear-for-crop').style.display = 'none';
                document.getElementById('disappear-btn-for-crop').style.display = 'none';
                document.getElementById('profile-picture-picker-image').style.display = 'none';
                document.getElementById('crop-set').style.display = 'block';
                document.getElementById('cropme').style.display = 'block';

                // Initialize and bind the image to cropme
                var image = $('#cropme').cropme({
                    rotation: {
                        enable: true,
                        slider: false,
                        position: 'right'
                    }
                });
                image.cropme('bind', {
                    url: e.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('crop-set').addEventListener('click', function () {
        var image = $('#cropme').cropme({
            rotation: {
                enable: true,
                slider: false,
                position: 'right'
            }
        });
        image.cropme('crop', {
            type: 'blob'
        }).then(function (output) {
            fetch(output)
                .then(response => response.blob())
                .then(blob => {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        // Set the data URL as the src of the img tag
                        document.querySelector(".profile-picture-picker-image").src = reader.result;

                        // Update UI post-crop
                        document.getElementById('disappear-for-crop').style.display = 'block';
                        document.getElementById('disappear-btn-for-crop').style.display = 'block';
                        document.getElementById('profile-picture-picker-image').style.display = 'block';
                        document.getElementById('crop-set').style.display = 'none';
                        document.getElementById('cropme').style.display = 'none';
                        image.cropme('destroy');
                    };
                    reader.readAsDataURL(blob);
                })
                .catch(error => console.error('Error:', error));
        });
    });
}


function useDefaultImage() {
    const storageRef = firebase.storage().ref();
    const auth = firebase.auth();
    const db = firebase.firestore();

    const defaultURL = '/assets/img/default_user.jpeg';
    fetch(defaultURL)
        .then(response => response.blob())
        .then(blob => {
            const userProfileImageRef = storageRef.child(`users_profilePic/${auth.currentUser.uid}.jpeg`);
            return userProfileImageRef.put(blob);
        })
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(downloadURL => {
            return db.collection('Users').doc(auth.currentUser.uid).update({
                profileIMG: downloadURL
            });
        })
        .then(() => {
            console.log('Updated profile with default image');
            document.querySelector(".profile-picture-picker-image").src = defaultURL;
        })
        .catch(error => {
            console.error("Error setting default picture:", error);
            alert('Error setting default picture. Please try again later.');
        });
}

function submitProfile() {
    const profilePictureImageInput = document.getElementById("profile-picture-picker");
    const auth = firebase.auth();
    const db = firebase.firestore();

    if (useDefaultImageFlag) {
        useDefaultImage(auth, db);
    } else {
        const file = profilePictureImageInput.files[0];
        console.log(usedDefaultImage)
        if (file) {
            document.getElementById('submitButton').innerText = 'loading...'

            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    if (img.width === img.height) {
                        uploadProfilePicture(file, auth, db);
                    } else {
                        alert('Please upload a square image.');
                    }
                };
                img.onerror = function () {
                    alert('There was an error reading the image.');
                };
                img.src = e.target.result;
            };
            reader.onerror = function () {
                alert('There was an error reading the file.');
            };
            reader.readAsDataURL(file);
        } else if (usedDefaultImage) {
            const defaultURL = '/assets/img/default_user.jpeg';
            fetch(defaultURL)
                .then(response => response.blob())
                .then(blob => {
                    const defaultFile = new File([blob], `default_user.jpeg`, { type: 'image/jpeg' });
                    uploadProfilePicture(defaultFile, auth, db);
                })
        } else {
            alert('Please upload a profile picture.');
        }
    }
}

function updateUserProfile(downloadURL, auth, db) {
    const fullNameInput = document.getElementById("edit-profile-full-name");
    const bioInput = document.getElementById("bio");

    if (auth.currentUser) {
        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);

        document.getElementById('submitButton').innerText = 'saving...'

        currentUserRef.update({
            name: fullNameInput.value,
            bio: bioInput.value,
            profileIMG: downloadURL
        }).then(() => {
            console.log('Profile updated with new image');

            setTimeout(() => {
                document.getElementById('submitButton').innerText = 'done!';
                window.location.href = '/index.html';
            }, 1000);
        }).catch((error) => {
            alert('Error updating profile. Please try again later.');
            console.error("Error updating profile:", error);
        });
    } else {
        console.error("User is not authenticated");
        alert('User is not authenticated. Please log in and try again.');
    }
}

function uploadProfilePicture(file, auth, db) {
    const storageRef = firebase.storage().ref();
    const fileExtension = file.name.split('.').pop();
    const filename = `${auth.currentUser.uid}.${fileExtension}`;
    const userProfileImageRef = storageRef.child(`users_profilePic/${filename}`);

    document.getElementById('submitButton').innerText = 'uploading...'

    userProfileImageRef.put(file).then(snapshot => {
        return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
        return updateUserProfile(downloadURL, auth, db);
    }).catch(error => {
        alert('Error uploading profile picture. Please try again later.');
        console.error("Error uploading profile picture:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let auth = firebase.auth();
    let db = firebase.firestore();

    const fullNameInput = document.getElementById("edit-profile-full-name");
    const useridInput = document.getElementById('edit-profile-userid');
    const userEmail = document.getElementById('edit-profile-email');
    const submitButton = document.getElementById('submitButton');
    const useDefaultButton = document.getElementById('use-default-image');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        useDefaultImageFlag = false;
        submitProfile();
    });

    useDefaultButton.addEventListener('click', () => {
        useDefaultImageFlag = true;
        usedDefaultImage = true;
        submitProfile();
    });

    auth.onAuthStateChanged(function (user) {
        if (user) {
            validateForm();

            const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);
            currentUserRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();

                    fullNameInput.value = data.name;
                    useridInput.value = data.senderId;
                    userEmail.value = data.email;
                    document.querySelector(".profile-picture-picker-image").src = data.profileIMG;
                }
            });
        } else {
            alert('Cannot get current user details. Please sign in first or refresh the page.');
            window.location.href = '/signin.html';
        }
    });
});