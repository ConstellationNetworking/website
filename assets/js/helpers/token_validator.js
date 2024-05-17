function missionRedeemTokens(user) {
    const userRef = db.collection('Users').doc(auth.currentUser.uid);

    userRef.collection('Missions').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().completed === true) {
                userRef.get()
                    .then((document) => {
                        if (document.exists) {
                            const data = document.data();

                            if (doc.data().tokensredeemed === false) {
                                userRef.update({
                                    astral_tokens: data.astral_tokens += 10
                                })
                                    .then(() => {
                                        alert('Congratulations! You just earned 10 astral tokens for completing a mission.');
                                        doc.ref.update({
                                            tokensredeemed: true
                                        });
                                    })
                                    .catch((error) => {
                                        console.error(error);
                                    })
                            }

                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        });
    });
}