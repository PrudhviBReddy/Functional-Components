
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <div>
            <section className="movie">
           
            <figure>
              <div>
          <img src="./kalki/Kalki-2898-AD Prabhas.jpg"></img>
          <figcaption>KARNA</figcaption>
          </div>
          <ul>
          <h1>KALKI 2898 AD</h1>
          <li><audio src="./kalki/Bujji Theme.mp3" controls></audio></li>
          <figcaption>Bujji Theme</figcaption>
          <li><audio src="./kalki/Ta Takkara.mp3" controls></audio></li>
          <figcaption>Ta Takkara</figcaption>
          <li><audio src="./kalki/Theme of Kalki.mp3" controls></audio></li>
          <figcaption>Theme of Kalki</figcaption>
          </ul>
          <div>
          <video className="Trailer" src="./kalki/Kalki Trailer.mp4" controls autoPlay muted ></video>
          <figcaption>KALKI 2898 AD Trailer</figcaption>
          </div>
          </figure>
          </section>
      </div>
      <Movies pic="./hanuman/Hanuman poster.jpg" name="HANUMAN" title="HanuMan" song1="./hanuman/Anjanadri Theme Song.mp3" songname1="Anjanadri Theme" song2="./hanuman/Hanuman Chalisa.mp3" songname2="Hanuman Chalisa" song3="./hanuman/Raghunandana.mp3" songname3="Raghunandana" trailer="./hanuman/Hanuman Trailer.mp4" trailername="HANUMAN Trailer"></Movies>
      <Movies pic="./18 Pages/18 Pages Poster.jpg" name="18 Pages" title="18 PAGES" song1="./18 Pages/Nannaya Raasina.mp3" songname1="Nannaya Raasina" song2="./18 Pages/Nee Valla O Pilla.mp3" songname2="Nee Valla O Pilla" song3="./18 Pages/Yedurangula Vaana.mp3" songname3="Yedurangula Vaana" trailer="./18 Pages/18 Pages Trailer.mp4" trailername="18 PAGES Trailer"></Movies>
      <Movies pic="./Adipurush/Adipurush poster.jpg" name="ADIPURUSH" title="ADIPURUSH" song1="./adipurush/Jai Shri RAM.mp3" songname1="Jai Shri RAM" song2="./Adipurush/Shivoham.mp3" songname2="Shivoham" song3="./Adipurush/Huppa Huiya.mp3" songname3="Huppa Huiya" trailer="./Adipurush/Adipurush Trailer.mp4" trailername="ADIPURUSH Trailer"></Movies>
      <Movies pic="./Andhala Rakshasi/andala rakshasi poster.jpg" name="Andhala Rakshasi" title="ANDHALA RAKSHASI" song1="./Andhala Rakshasi/Yemito.mp3" songname1="Yemito" song2="./Andhala Rakshasi/Ye Mantramo.mp3" songname2="Ye Mantramo" song3="./Andhala Rakshasi/Vennante.mp3" songname3="Vennante" trailer="./Andhala Rakshasi/Andhala Rakshasi Trailer.mp4" trailername="ANDHALA RAKSHASI Trailer"></Movies>
      <Movies pic="./Cheliyaa/Cheliyaa poster.jpg" name="Cheliyaa" title="CHELIYAA" song1="./Cheliyaa/Hamsaro.mp3" songname1="Hamsaro" song2="./Cheliyaa/Morethukochindhi.mp3" songname2="Morethukochindhi" song3="./Cheliyaa/Allei Allei.mp3" songname3="Allei Allei" trailer="./Cheliyaa/Cheliyaa Trailer.mp4" trailername="CHELIYAA Trailer"></Movies>
      <Movies pic="./Jailer/jailer poster.jpg" name="JAILER" title="JAILER" song1="./Jailer/Jailer Theme.mp3" songname1="Jailer Theme" song2="./Jailer/Muthuvel Pandian Theme.mp3" songname2="Muthuvel Pandian Theme" song3="./Jailer/Kaavaali.mp3" songname3="Kaavaali" trailer="./Jailer/JAILER Official.mp4" trailername="JAILER Trailer"></Movies>
      <Movies pic="./Jawan/jawan poster.jpg" name="Jawan" title="JAWAN" song1="./Jawan/Jawan Title Track.mp3" songname1="Jawan Title Track" song2="./Jawan/Chalona.mp3" songname2="Chalona" song3="./Jawan/Nallaani Cheekatilo.mp3" songname3="Nallaani Cheekatilo" trailer="./Jawan/Jawan Official.mp4" trailername="JAWAN Trailer"></Movies>
      <Movies pic="./Bharateeyudu 2/Bharateeyudu 2 poster.jpg" name="Bharateeyudu 2" title="BHARATEEYUDU 2" song1="./Bharateeyudu 2/Souraa.mp3" songname1="Souraa" song2="./Bharateeyudu 2/Come Back Indian.mp3" songname2="Come Back Indian" song3="./Bharateeyudu 2/Thatha Vasthaade.mp3" songname3="Thatha Vasthaade" trailer="./Bharateeyudu 2/Bharateeyudu 2 Trailer.mp4" trailername="BHARATEEYUDU 2 Trailer"></Movies>
      <Movies pic="./Radhe Shyam/Radhe Shyam poster.jpg" name="Radhe Shyam" title="RADHE SHYAM" song1="./Radhe Shyam/Ee Raathale.mp3" songname1="Ee Raathale" song2="./Radhe Shyam/Nagumomu Thaarale.mp3" songname2="Nagumomu Thaarale" song3="./Radhe Shyam/Sanchari.mp3" songname3="Sanchari" trailer="./Radhe Shyam/Radhe Shyam Trailer.mp4" trailername="RADHE SHYAM Trailer"></Movies>
   
    </div>
  );
}

export default App;
