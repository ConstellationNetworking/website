const a0_0x2d6e26=a0_0x4d82;function a0_0x4d82(_0x470b51,_0x1bd7e3){const _0x49b1c0=a0_0x49b1();return a0_0x4d82=function(_0x4d8239,_0x1c5794){_0x4d8239=_0x4d8239-0x19c;let _0x458c3d=_0x49b1c0[_0x4d8239];return _0x458c3d;},a0_0x4d82(_0x470b51,_0x1bd7e3);}(function(_0x327778,_0x410dad){const _0x293247=a0_0x4d82,_0x5bce47=_0x327778();while(!![]){try{const _0x31207b=-parseInt(_0x293247(0x1b2))/0x1+parseInt(_0x293247(0x1d3))/0x2+parseInt(_0x293247(0x1be))/0x3+-parseInt(_0x293247(0x1bd))/0x4*(-parseInt(_0x293247(0x1a2))/0x5)+-parseInt(_0x293247(0x1de))/0x6+-parseInt(_0x293247(0x1b0))/0x7*(parseInt(_0x293247(0x1a3))/0x8)+parseInt(_0x293247(0x1c2))/0x9*(parseInt(_0x293247(0x1d8))/0xa);if(_0x31207b===_0x410dad)break;else _0x5bce47['push'](_0x5bce47['shift']());}catch(_0x2da2a8){_0x5bce47['push'](_0x5bce47['shift']());}}}(a0_0x49b1,0xb7788));let db=firebase[a0_0x2d6e26(0x1e7)](),auth=firebase['auth'](),useDefaultImageFlag=![],usedDefaultImage=![];function validateForm(){const _0xd4b2da=a0_0x2d6e26;document[_0xd4b2da(0x1c7)](_0xd4b2da(0x19f))[_0xd4b2da(0x1a5)]('change',_0x3919f8=>{const _0x1bf110=_0xd4b2da,_0x5bbd64=_0x3919f8[_0x1bf110(0x1f1)]['files'][0x0],_0x1ee8ff=new FileReader();_0x1ee8ff[_0x1bf110(0x1a5)](_0x1bf110(0x1bc),_0x3e5c0a=>{const _0x4d5adb=_0x1bf110;document[_0x4d5adb(0x1b7)]('.profile-picture-picker-image')[_0x4d5adb(0x1aa)]=_0x3e5c0a[_0x4d5adb(0x1f1)][_0x4d5adb(0x1ec)];}),_0x5bbd64&&_0x1ee8ff['readAsDataURL'](_0x5bbd64);});}function useDefaultImage(){const _0x78d062=a0_0x2d6e26,_0x283a56=firebase['storage']()[_0x78d062(0x1f0)](),_0x59062a=firebase[_0x78d062(0x1cf)](),_0x296838=firebase[_0x78d062(0x1e7)](),_0x354abb=_0x78d062(0x1cb);fetch(_0x354abb)['then'](_0x576b16=>_0x576b16[_0x78d062(0x1d4)]())[_0x78d062(0x1b4)](_0x8d9f44=>{const _0x13614d=_0x78d062,_0x29dfcf=_0x283a56[_0x13614d(0x1af)]('users_profilePic/'+_0x59062a['currentUser'][_0x13614d(0x1c6)]+_0x13614d(0x1bf));return _0x29dfcf[_0x13614d(0x1e5)](_0x8d9f44);})['then'](_0x50a2d0=>_0x50a2d0[_0x78d062(0x1f0)][_0x78d062(0x1ba)]())[_0x78d062(0x1b4)](_0x576691=>{const _0x2a0500=_0x78d062;return _0x296838[_0x2a0500(0x1d2)](_0x2a0500(0x1d9))[_0x2a0500(0x1c9)](_0x59062a[_0x2a0500(0x1d0)][_0x2a0500(0x1c6)])[_0x2a0500(0x1c5)]({'profileIMG':_0x576691});})[_0x78d062(0x1b4)](()=>{const _0x54ab06=_0x78d062;console[_0x54ab06(0x1b1)](_0x54ab06(0x1db)),document['querySelector'](_0x54ab06(0x1e4))['src']=_0x354abb;})[_0x78d062(0x1ae)](_0x1fb616=>{const _0x1c239d=_0x78d062;console['error'](_0x1c239d(0x1d7),_0x1fb616),alert(_0x1c239d(0x1df));});}function submitProfile(){const _0x35b3da=a0_0x2d6e26,_0x2a13b7=document[_0x35b3da(0x1c7)]('profile-picture-picker'),_0x5e01c6=firebase[_0x35b3da(0x1cf)](),_0xef2d60=firebase[_0x35b3da(0x1e7)]();if(useDefaultImageFlag)useDefaultImage(_0x5e01c6,_0xef2d60);else{const _0x2197f0=_0x2a13b7['files'][0x0];console['log'](usedDefaultImage);const _0x26891a=_0xef2d60['collection'](_0x35b3da(0x1d9))[_0x35b3da(0x1c9)](_0x5e01c6[_0x35b3da(0x1d0)][_0x35b3da(0x1c6)]);_0x26891a[_0x35b3da(0x1ce)]()[_0x35b3da(0x1b4)](_0x20d268=>{const _0x155754=_0x35b3da;if(_0x20d268['exists']){const _0x5bfa02=_0x20d268[_0x155754(0x19e)]();if(_0x2197f0){document[_0x155754(0x1c7)](_0x155754(0x1c4))[_0x155754(0x1d6)]=_0x155754(0x1c8);const _0x9bbf27=new FileReader();_0x9bbf27['onload']=function(_0x19aa87){const _0x22822f=_0x155754,_0x3f691f=new Image();_0x3f691f[_0x22822f(0x1c0)]=function(){const _0x19b4b3=_0x22822f;_0x3f691f['width']===_0x3f691f[_0x19b4b3(0x19c)]?uploadProfilePicture(_0x2197f0,_0x5e01c6,_0xef2d60):(alert(_0x19b4b3(0x1e2)),document[_0x19b4b3(0x1c7)]('submitButton')[_0x19b4b3(0x1ea)]=_0x19b4b3(0x1b9));},_0x3f691f[_0x22822f(0x1a7)]=function(){const _0x2e12b8=_0x22822f;alert(_0x2e12b8(0x1e0)),document['getElementById'](_0x2e12b8(0x1c4))[_0x2e12b8(0x1ea)]=_0x2e12b8(0x1b9);},_0x3f691f[_0x22822f(0x1aa)]=_0x19aa87[_0x22822f(0x1f1)][_0x22822f(0x1ec)];},_0x9bbf27['onerror']=function(){const _0x5a9a7d=_0x155754;alert('There\x20was\x20an\x20error\x20reading\x20the\x20file.'),document[_0x5a9a7d(0x1c7)](_0x5a9a7d(0x1c4))['innerHTML']=_0x5a9a7d(0x1b9);},_0x9bbf27['readAsDataURL'](_0x2197f0);}else{if(_0x5bfa02[_0x155754(0x1a9)])updateUserProfile(_0x5bfa02['profileIMG'],_0x5e01c6,_0xef2d60);else{if(usedDefaultImage){const _0x5e8c5c=_0x155754(0x1cb);fetch(_0x5e8c5c)[_0x155754(0x1b4)](_0x337509=>_0x337509['blob']())[_0x155754(0x1b4)](_0x5264d5=>{const _0x54948f=_0x155754,_0x37707e=new File([_0x5264d5],_0x54948f(0x1eb),{'type':_0x54948f(0x1b8)});uploadProfilePicture(_0x37707e,_0x5e01c6,_0xef2d60);});}else alert(_0x155754(0x1a6)),document['getElementById']('submitButton')[_0x155754(0x1ea)]=_0x155754(0x1b9);}}}});}}function updateUserProfile(_0x135b69,_0x16b16d,_0x3ceb69){const _0x1b2974=a0_0x2d6e26,_0xa04aa6=document['getElementById'](_0x1b2974(0x1cd)),_0x122100=document[_0x1b2974(0x1c7)](_0x1b2974(0x1d1));!_0x122100['value'][_0x1b2974(0x1ed)]()&&(_0x122100['value']=_0x1b2974(0x1a4));if(_0x16b16d[_0x1b2974(0x1d0)]){const _0xed13e2=_0x3ceb69[_0x1b2974(0x1d2)](_0x1b2974(0x1d9))[_0x1b2974(0x1c9)](_0x16b16d[_0x1b2974(0x1d0)][_0x1b2974(0x1c6)]);document[_0x1b2974(0x1c7)](_0x1b2974(0x1c4))['innerText']=_0x1b2974(0x1b3),_0xed13e2[_0x1b2974(0x1c5)]({'name':_0xa04aa6[_0x1b2974(0x1bb)],'bio':_0x122100[_0x1b2974(0x1bb)],'profileIMG':_0x135b69})[_0x1b2974(0x1b4)](()=>{const _0x5a5ba5=_0x1b2974;console[_0x5a5ba5(0x1b1)]('Profile\x20updated\x20with\x20new\x20image'),setTimeout(()=>{const _0x50a379=_0x5a5ba5;document['getElementById'](_0x50a379(0x1c4))[_0x50a379(0x1d6)]=_0x50a379(0x1e1),window[_0x50a379(0x1ab)][_0x50a379(0x1e8)]=_0x50a379(0x1b5);},0x3e8);})[_0x1b2974(0x1ae)](_0x552955=>{const _0x31ab22=_0x1b2974;alert('Error\x20updating\x20profile.\x20Please\x20try\x20again\x20later.'),console['error'](_0x31ab22(0x1f4),_0x552955);});}else console[_0x1b2974(0x1f5)](_0x1b2974(0x1ee)),alert('User\x20is\x20not\x20authenticated.\x20Please\x20log\x20in\x20and\x20try\x20again.');}function uploadProfilePicture(_0x27318d,_0x24d5c7,_0x30d975){const _0x12e737=a0_0x2d6e26,_0x5af8fd=firebase[_0x12e737(0x19d)]()['ref'](),_0x21a103=_0x27318d['name'][_0x12e737(0x1f3)]('.')[_0x12e737(0x1b6)](),_0x275191=_0x24d5c7[_0x12e737(0x1d0)][_0x12e737(0x1c6)]+'.'+_0x21a103,_0x3d6c19=_0x5af8fd[_0x12e737(0x1af)](_0x12e737(0x1e6)+_0x275191);document[_0x12e737(0x1c7)](_0x12e737(0x1c4))[_0x12e737(0x1d6)]=_0x12e737(0x1ad),_0x3d6c19[_0x12e737(0x1e5)](_0x27318d)[_0x12e737(0x1b4)](_0x4ab8e7=>{const _0x598af7=_0x12e737;return _0x4ab8e7['ref'][_0x598af7(0x1ba)]();})['then'](_0x20ddbd=>{return updateUserProfile(_0x20ddbd,_0x24d5c7,_0x30d975);})[_0x12e737(0x1ae)](_0x46d93d=>{const _0x40040f=_0x12e737;alert(_0x40040f(0x1ef)),console[_0x40040f(0x1f5)](_0x40040f(0x1a8),_0x46d93d);});}function a0_0x49b1(){const _0x532840=['innerHTML','default_user.jpeg','result','trim','User\x20is\x20not\x20authenticated','Error\x20uploading\x20profile\x20picture.\x20Please\x20try\x20again\x20later.','ref','target','edit-profile-email','split','Error\x20updating\x20profile:','error','height','storage','data','profile-picture-picker','click','email','704545ctTKRn','1385416VsEWaz','They\x27re\x20still\x20thinking\x20of\x20a\x20bio...','addEventListener','Please\x20upload\x20a\x20profile\x20picture,\x20or\x20use\x20default.','onerror','Error\x20uploading\x20profile\x20picture:','profileIMG','src','location','/signin.html','uploading...','catch','child','21bwsARI','log','25380IKQMcF','saving...','then','/account.html?action=setupProfile','pop','querySelector','image/jpeg','takeoff\x20<span\x20style=\x22padding-left:\x205px;\x22>🚀</span>','getDownloadURL','value','load','28aJxTLb','651708HedkGa','.jpeg','onload','https://placeholder.co/100x100','18XtjOCT','onAuthStateChanged','submitButton','update','uid','getElementById','loading...','doc','exists','/assets/img/default_user.jpeg','name','edit-profile-full-name','get','auth','currentUser','bio','collection','1042296ghvNnp','blob','use-default-image','innerText','Error\x20setting\x20default\x20picture:','2060VLKrgJ','Users','Cannot\x20get\x20current\x20user\x20details.\x20Please\x20sign\x20in\x20first\x20or\x20refresh\x20the\x20page.','Updated\x20profile\x20with\x20default\x20image','set','DOMContentLoaded','2572512NRdTzi','Error\x20setting\x20default\x20picture.\x20Please\x20try\x20again\x20later.','There\x20was\x20an\x20error\x20reading\x20the\x20image.','done!','Please\x20upload\x20a\x20square\x20image.','senderId','.profile-picture-picker-image','put','users_profilePic/','firestore','href','edit-profile-userid'];a0_0x49b1=function(){return _0x532840;};return a0_0x49b1();}document[a0_0x2d6e26(0x1a5)](a0_0x2d6e26(0x1dd),()=>{const _0x39ece2=a0_0x2d6e26;let _0x52a226=firebase['auth'](),_0x17b082=firebase[_0x39ece2(0x1e7)]();const _0xebb138=document[_0x39ece2(0x1c7)](_0x39ece2(0x1cd)),_0x3b3833=document[_0x39ece2(0x1c7)](_0x39ece2(0x1e9)),_0x426960=document[_0x39ece2(0x1c7)](_0x39ece2(0x1f2)),_0x3aaf41=document[_0x39ece2(0x1c7)]('bio'),_0x2aaca8=document[_0x39ece2(0x1c7)](_0x39ece2(0x1c4)),_0x3690d6=document[_0x39ece2(0x1c7)](_0x39ece2(0x1d5));_0x2aaca8[_0x39ece2(0x1a5)](_0x39ece2(0x1a0),_0x3e0ab0=>{_0x3e0ab0['preventDefault'](),useDefaultImageFlag=![],submitProfile();}),_0x3690d6[_0x39ece2(0x1a5)]('click',()=>{useDefaultImageFlag=!![],usedDefaultImage=!![],alert('Using\x20default\x20image!'),submitProfile();}),_0x52a226[_0x39ece2(0x1c3)](function(_0x49b793){const _0x40c1cf=_0x39ece2;if(_0x49b793){validateForm();const _0x5bb287=_0x17b082[_0x40c1cf(0x1d2)](_0x40c1cf(0x1d9))[_0x40c1cf(0x1c9)](_0x49b793[_0x40c1cf(0x1c6)]),_0x4efaff=new Date();_0x5bb287[_0x40c1cf(0x1dc)]({'lastActive':_0x4efaff},{'merge':!![]});const _0x2e1c6c=_0x17b082[_0x40c1cf(0x1d2)](_0x40c1cf(0x1d9))[_0x40c1cf(0x1c9)](_0x52a226[_0x40c1cf(0x1d0)]['uid']);_0x2e1c6c[_0x40c1cf(0x1ce)]()[_0x40c1cf(0x1b4)](_0x296ce6=>{const _0x353d7e=_0x40c1cf;if(_0x296ce6[_0x353d7e(0x1ca)]){const _0x4dc7bc=_0x296ce6[_0x353d7e(0x19e)]();_0xebb138[_0x353d7e(0x1bb)]=_0x4dc7bc[_0x353d7e(0x1cc)],_0x3b3833[_0x353d7e(0x1bb)]=_0x4dc7bc[_0x353d7e(0x1e3)],_0x426960[_0x353d7e(0x1bb)]=_0x4dc7bc[_0x353d7e(0x1a1)],bio[_0x353d7e(0x1bb)]&&(bio[_0x353d7e(0x1bb)]=_0x4dc7bc['bio']),console[_0x353d7e(0x1b1)](_0x4dc7bc[_0x353d7e(0x1a9)]),document['querySelector'](_0x353d7e(0x1e4))['src']=_0x4dc7bc[_0x353d7e(0x1a9)]==''?_0x353d7e(0x1c1):_0x4dc7bc[_0x353d7e(0x1a9)];}});}else alert(_0x40c1cf(0x1da)),window[_0x40c1cf(0x1ab)][_0x40c1cf(0x1e8)]=_0x40c1cf(0x1ac);});});