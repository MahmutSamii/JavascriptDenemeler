
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.container-two');

function values(){
    const isim = document.test.isim.value;
    const sifre = document.test.sifre.value;
    const tc = document.test.tc.value;
    document.write("İsim : " + isim + "<br>" + 'sifre : ' + sifre + "<br>" + 'Tc : ' + tc);
}

function value2(){
    const isim = document.form2.isim.value;
    const sifre = document.form2.numara.value;
    const tc = document.form2.tc.value;
    document.write("İsim : " + isim + "<br>" + 'sifre : ' + sifre + "<br>" + 'Tc : ' + tc);

}
const href = document.getElementById('href');
const href2 = document.getElementById('href2');
href.addEventListener('click',function (){
    container.style.display="block";
    containerTwo.style.display="none";
});

href2.addEventListener('click',function (){
   containerTwo.style.display="block";
   container.style.display="none";
});







