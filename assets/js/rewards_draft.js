const a0_0x36b709=a0_0x55e2;(function(_0x46b930,_0x266bfb){const _0x12390d=a0_0x55e2,_0x2ed0d1=_0x46b930();while(!![]){try{const _0x415abb=parseInt(_0x12390d(0x1ab))/0x1+-parseInt(_0x12390d(0x1ba))/0x2+parseInt(_0x12390d(0x1d3))/0x3+-parseInt(_0x12390d(0x1b4))/0x4+parseInt(_0x12390d(0x1c7))/0x5+-parseInt(_0x12390d(0x1b6))/0x6+-parseInt(_0x12390d(0x1cc))/0x7*(-parseInt(_0x12390d(0x1d0))/0x8);if(_0x415abb===_0x266bfb)break;else _0x2ed0d1['push'](_0x2ed0d1['shift']());}catch(_0x27e718){_0x2ed0d1['push'](_0x2ed0d1['shift']());}}}(a0_0x2c5e,0x37393));function a0_0x55e2(_0x347e21,_0x16b815){const _0x2c5eb3=a0_0x2c5e();return a0_0x55e2=function(_0x55e222,_0x3ed350){_0x55e222=_0x55e222-0x19f;let _0x16ae10=_0x2c5eb3[_0x55e222];return _0x16ae10;},a0_0x55e2(_0x347e21,_0x16b815);}let db=firebase['firestore'](),auth=firebase[a0_0x36b709(0x1e5)]();function smoothScrollAboveElement(_0x1f26e5,_0x58b18a){const _0x53e7ef=a0_0x36b709,_0x43ad7e=document['getElementById'](_0x1f26e5);if(_0x43ad7e){const _0x455fa8=_0x43ad7e[_0x53e7ef(0x1dc)](),_0x2feeb5=_0x455fa8['top']+window['pageYOffset'];window[_0x53e7ef(0x1b0)]({'top':_0x2feeb5-_0x58b18a,'behavior':_0x53e7ef(0x1b2)});}}function a0_0x2c5e(){const _0x701c26=['getElementById','profileIMG','reload','scrollTo','Profile\x20picture\x20of\x20','smooth','available-novacoins','1308788Qxvegn','novacoins:\x20','757650oroXdt','mb-2\x20text-xl\x20font-bold\x20tracking-tight\x20text-gray-900','currentUser','Are\x20you\x20sure\x20you\x20want\x20to\x20sell\x20','345802ycADqa','Unable\x20to\x20sell\x20item.\x20Please\x20try\x20again\x20later.','data','none','doc','uid','appendChild','item','email','/signin.html','currentUser-name','/assets/img/rewards/','max-w-sm\x20bg-white\x20border\x20border-gray-200\x20rounded-lg\x20shadow-md','1291165ycBbCG','currentUser-email','alt','get','update','14sRMejF','Sell','set','href','866608MeqcdM','textDecoration','then','420138nJuDPe','onclick','toLowerCase','.png','currentUser-profile-picture','Users','collection','Redeemed_Items','error','getBoundingClientRect','createElement','catch','style','img','className','exists','addEventListener','novacoins','auth','textContent','You\x20don\x27t\x20have\x20enough\x20astral\x20tokens\x20to\x20redeem!','myrewards-items','Error\x20deleting\x20redeemed\x20item','forEach','innerHTML','div','where','/assets/img/default_user.jpeg','pointer','dataset','name','237637Ashldu','location'];a0_0x2c5e=function(){return _0x701c26;};return a0_0x2c5e();}function sell(_0x4e6a16,_0x1f77ce){const _0x3a743c=a0_0x36b709;confirm(_0x3a743c(0x1b9)+_0x4e6a16+'?')&&db[_0x3a743c(0x1d9)](_0x3a743c(0x1d8))['doc'](auth[_0x3a743c(0x1b8)][_0x3a743c(0x1bf)])[_0x3a743c(0x1d9)]('Redeemed_Items')[_0x3a743c(0x1a6)](_0x3a743c(0x1c1),'==',_0x4e6a16)[_0x3a743c(0x1ca)]()['then'](_0x39820a=>{const _0x31cf90=_0x3a743c;_0x39820a[_0x31cf90(0x1a3)](_0x297808=>{const _0x3f3778=_0x31cf90;db[_0x3f3778(0x1d9)](_0x3f3778(0x1d8))[_0x3f3778(0x1be)](auth[_0x3f3778(0x1b8)][_0x3f3778(0x1bf)])[_0x3f3778(0x1d9)](_0x3f3778(0x1da))[_0x3f3778(0x1be)](_0x297808['id'])['delete']()['then'](()=>{const _0x1dfb02=_0x3f3778;db['collection'](_0x1dfb02(0x1d8))[_0x1dfb02(0x1be)](auth[_0x1dfb02(0x1b8)][_0x1dfb02(0x1bf)])[_0x1dfb02(0x1ca)]()[_0x1dfb02(0x1d2)](_0x3f4d5a=>{const _0x37ea5c=_0x1dfb02;if(_0x3f4d5a[_0x37ea5c(0x1e2)]){const _0x38a7c3=_0x3f4d5a[_0x37ea5c(0x1bc)]();db['collection'](_0x37ea5c(0x1d8))['doc'](auth[_0x37ea5c(0x1b8)][_0x37ea5c(0x1bf)])[_0x37ea5c(0x1cb)]({'novacoins':_0x38a7c3[_0x37ea5c(0x1e4)]+=parseInt(_0x1f77ce)})['then'](()=>{location['reload']();})[_0x37ea5c(0x1de)](_0x58eb28=>{const _0x13bdfb=_0x37ea5c;console[_0x13bdfb(0x1db)](_0x13bdfb(0x1a2),_0x58eb28),alert(_0x13bdfb(0x1bb));});}})[_0x1dfb02(0x1de)](_0x134a11=>{const _0x424af4=_0x1dfb02;console[_0x424af4(0x1db)](_0x424af4(0x1a2),_0x134a11),alert(_0x424af4(0x1bb));});})[_0x3f3778(0x1de)](_0x216bee=>{const _0x113795=_0x3f3778;console['error'](_0x113795(0x1a2),_0x216bee),alert(_0x113795(0x1bb));});});});}function redeem(_0x2613b9,_0x45ba4e){const _0xff2ab0=a0_0x36b709;db[_0xff2ab0(0x1d9)](_0xff2ab0(0x1d8))[_0xff2ab0(0x1be)](auth[_0xff2ab0(0x1b8)][_0xff2ab0(0x1bf)])['get']()['then'](_0x349fb7=>{const _0x4e9035=_0xff2ab0;if(_0x349fb7[_0x4e9035(0x1e2)]){const _0x58e3e0=_0x349fb7[_0x4e9035(0x1bc)]();_0x58e3e0[_0x4e9035(0x1e4)]>=parseInt(_0x45ba4e)?(db[_0x4e9035(0x1d9)](_0x4e9035(0x1d8))[_0x4e9035(0x1be)](auth[_0x4e9035(0x1b8)][_0x4e9035(0x1bf)])[_0x4e9035(0x1cb)]({'novacoins':_0x58e3e0['novacoins']-parseInt(_0x45ba4e)}),document[_0x4e9035(0x1ad)](_0x4e9035(0x1b3))[_0x4e9035(0x1a4)]=_0x58e3e0[_0x4e9035(0x1e4)]-parseInt(_0x45ba4e),db['collection'](_0x4e9035(0x1d8))[_0x4e9035(0x1be)](auth[_0x4e9035(0x1b8)]['uid'])['collection'](_0x4e9035(0x1da))['add']({'item':_0x2613b9,'novacoins':parseInt(_0x45ba4e),'redeemedAt':new Date()})['then'](()=>{const _0x162ed4=_0x4e9035;alert('Successfully\x20Redeemed\x20'+_0x2613b9+'!'),location[_0x162ed4(0x1af)]();})[_0x4e9035(0x1de)](_0x38f173=>{const _0xb49a8f=_0x4e9035;console[_0xb49a8f(0x1db)](_0x38f173);})):alert(_0x4e9035(0x1a0));}});}document[a0_0x36b709(0x1e3)]('DOMContentLoaded',function(){auth['onAuthStateChanged'](function(_0x1e2e76){const _0x3c2fc4=a0_0x55e2;if(_0x1e2e76){const _0xaeee89=db[_0x3c2fc4(0x1d9)](_0x3c2fc4(0x1d8))[_0x3c2fc4(0x1be)](_0x1e2e76[_0x3c2fc4(0x1bf)]),_0x198bbd=new Date();_0xaeee89[_0x3c2fc4(0x1ce)]({'lastActive':_0x198bbd},{'merge':!![]}),db[_0x3c2fc4(0x1d9)](_0x3c2fc4(0x1d8))[_0x3c2fc4(0x1be)](auth[_0x3c2fc4(0x1b8)][_0x3c2fc4(0x1bf)])[_0x3c2fc4(0x1ca)]()[_0x3c2fc4(0x1d2)](_0x29b0b3=>{const _0x530bc9=_0x3c2fc4;if(_0x29b0b3[_0x530bc9(0x1e2)]){const _0x31c007=_0x29b0b3[_0x530bc9(0x1bc)]();document[_0x530bc9(0x1ad)](_0x530bc9(0x1c4))[_0x530bc9(0x1a4)]=_0x31c007[_0x530bc9(0x1aa)],document[_0x530bc9(0x1ad)](_0x530bc9(0x1c8))[_0x530bc9(0x1a4)]=_0x31c007[_0x530bc9(0x1c2)],document['getElementById']('currentUser-profile-picture')['src']=_0x31c007[_0x530bc9(0x1ae)]==''?_0x530bc9(0x1a7):_0x31c007[_0x530bc9(0x1ae)],document[_0x530bc9(0x1ad)](_0x530bc9(0x1d7))[_0x530bc9(0x1c9)]=_0x530bc9(0x1b1)+_0x31c007['name'],document[_0x530bc9(0x1ad)](_0x530bc9(0x1b3))[_0x530bc9(0x1a4)]=_0x31c007[_0x530bc9(0x1e4)];}}),db[_0x3c2fc4(0x1d9)](_0x3c2fc4(0x1d8))[_0x3c2fc4(0x1be)](auth[_0x3c2fc4(0x1b8)][_0x3c2fc4(0x1bf)])[_0x3c2fc4(0x1d9)](_0x3c2fc4(0x1da))[_0x3c2fc4(0x1ca)]()[_0x3c2fc4(0x1d2)](_0x1448ee=>{const _0x24ce94=_0x3c2fc4;_0x1448ee[_0x24ce94(0x1a3)](_0x58d203=>{const _0xb14ec3=_0x24ce94,_0x10cf02=_0x58d203[_0xb14ec3(0x1bc)](),_0x48cb31=document[_0xb14ec3(0x1dd)](_0xb14ec3(0x1a5));_0x48cb31[_0xb14ec3(0x1e1)]=_0xb14ec3(0x1c6);const _0x42b6b1=document[_0xb14ec3(0x1dd)](_0xb14ec3(0x1e0));_0x42b6b1['className']='rounded-t-lg',_0x42b6b1['src']=_0xb14ec3(0x1c5)+_0x10cf02[_0xb14ec3(0x1c1)][_0xb14ec3(0x1d5)]()['replace'](/ /g,'_')+_0xb14ec3(0x1d6),_0x48cb31['appendChild'](_0x42b6b1);const _0x15f948=document[_0xb14ec3(0x1dd)](_0xb14ec3(0x1a5));_0x15f948[_0xb14ec3(0x1e1)]='p-4',_0x48cb31['appendChild'](_0x15f948);const _0x4f521f=document[_0xb14ec3(0x1dd)]('h5');_0x4f521f[_0xb14ec3(0x1e1)]=_0xb14ec3(0x1b7),_0x4f521f[_0xb14ec3(0x19f)]=_0x10cf02[_0xb14ec3(0x1c1)],_0x15f948[_0xb14ec3(0x1c0)](_0x4f521f);const _0x8a7d8a=document['createElement']('p');_0x8a7d8a[_0xb14ec3(0x1e1)]='text-gray-600',_0x8a7d8a[_0xb14ec3(0x19f)]=_0xb14ec3(0x1b5)+_0x10cf02[_0xb14ec3(0x1e4)],_0x15f948[_0xb14ec3(0x1c0)](_0x8a7d8a);const _0x47d6c8=document[_0xb14ec3(0x1dd)](_0xb14ec3(0x1cd));_0x47d6c8[_0xb14ec3(0x1e1)]='inline-flex\x20items-center\x20px-3\x20py-2\x20text-sm\x20font-medium\x20text-center\x20text-white\x20bg-red-700\x20rounded-lg\x20hover:bg-red-800\x20focus:ring-4\x20focus:outline-none\x20focus:ring-blue-300\x20dark:bg-blue-600\x20dark:hover:bg-blue-700\x20dark:focus:ring-blue-800\x20mt-10',_0x47d6c8[_0xb14ec3(0x1df)][_0xb14ec3(0x1d1)]=_0xb14ec3(0x1bd),_0x47d6c8[_0xb14ec3(0x1df)]['cursor']=_0xb14ec3(0x1a8),_0x47d6c8[_0xb14ec3(0x1a9)][_0xb14ec3(0x1aa)]=_0x10cf02[_0xb14ec3(0x1c1)],_0x47d6c8['dataset']['redeem']=_0x10cf02[_0xb14ec3(0x1e4)],_0x47d6c8[_0xb14ec3(0x1d4)]=function(){const _0x2f11a1=_0xb14ec3;sell(_0x10cf02[_0x2f11a1(0x1c1)],_0x10cf02[_0x2f11a1(0x1e4)]);},_0x47d6c8[_0xb14ec3(0x19f)]=_0xb14ec3(0x1cd),_0x15f948[_0xb14ec3(0x1c0)](_0x47d6c8),document[_0xb14ec3(0x1ad)](_0xb14ec3(0x1a1))['appendChild'](_0x48cb31);});});}else window[_0x3c2fc4(0x1ac)][_0x3c2fc4(0x1cf)]=_0x3c2fc4(0x1c3);});});