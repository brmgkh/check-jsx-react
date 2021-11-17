import './App.css';
import img1 from  './imgdjerba1.jpg';

function App() {
  return (
    
     <div style={{border:'solid 1 px black,maxWidth:100vw'}} className="font">

<div id="x"> <h4><h1>Bienvenue à Djerba</h1> Djerba, parfois orthographiée Jerba (arabe : جربة Écouter /ˈʒɪrbæ/), est une île de la mer Méditerranée d'une superficie de 514 km2 (25 kilomètres sur 20 et un littoral de 150 kilomètres) et située à l'est de la côte orientale tunisienne. Plus grande île des côtes d'Afrique du Nord, localisée au sud-est du golfe de Gabès qu'elle borde par ses côtes orientales et septentrionalesnote 1, Djerba ferme au sud le golfe de Boughrara. Sa principale ville, Houmt Souk, rassemble à elle seule 42 992 des 163 726 Djerbiens1.

Anciennement appelée Gerbi ou Zerbi, l'île aurait été traversée par Ulysse. Les Carthaginois y fondent plusieurs comptoirs, les Romains y construisent plusieurs villes et y développent l'agriculture et le commerce portuaire. Passée successivement sous domination vandale, byzantine, arabe, ottomane, puis française, Djerba est devenue depuis les années 1960 une destination touristique populaire. Elle demeure marquée à la fois par la persistance de l'un des derniers parlers berbères tunisiens, le tamazight de Djerba, l'adhésion à l'ibadisme d'une partie de sa population musulmane et la présence d'une importante communauté juive dont la tradition fait remonter la venue à la destruction du Temple de Salomon par l'empereur Nabuchodonosor II en 586 av. J.-C.

L'île est reliée au continent, au sud-ouest par un bac qui conduit d'Ajim à Jorf et au sud-est par une voie de sept kilomètres, dont la première construction remonterait à la fin du iiie siècle av. J.-C., entre la localité d'El Kantara et la péninsule de Zarzis.</h4></div>
<div className="images">
<img src={img1} alt='imageDjerba1' id="img1" />
<img src="imgdjerba2.jpg" alt='imageDjerba2' id="img2"/></div>
<div id="video">
<iframe width="500" height="315" src="https://www.youtube.com/embed/oGsGxX34xCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

  );
}

export default App;
