import { Link } from 'react-router-dom';
import '../css/Home.css';
import Logo from './Logo';
import Featured from './Featured';

export default function Home() {
    return (
        <>
        <section className='home'>
            <section 
                className='photoHome'
                style={{
                    backgroundImage: 'url("../photos/featured/Photo-0082_large.jpg")'
                }}>
                    <Logo />
            </section>
            <section className="featuredSets">
                <Featured 
                    image = "../photos/Shop.jpg"
                    title = "Shop"
                    link = ""/>
                <Featured 
                    image = "../photos/Landscape.jpg"
                    title = "Landscape"
                    link = "/photos/landscape"/>
                <Featured 
                    image = "../photos/FamilyKids.jpg"
                    title = "Family & Kids"
                    link = "/photos/FamilyKids"/>
                <Featured 
                    image = "../photos/Cosplay.jpg"
                    title = "Cosplay"
                    link = "/photos/cosplay"/>
                <Featured 
                    image = "../photos/BlackandWhite.jpg"
                    title = "Black & White"
                    link = "/photos/Black-&-White"/>
                <Featured 
                    image = "../photos/MorePhotos2022.jpg"
                    title = "All Photos"
                    link = "/photos/all"/>
            </section>
        </section>
        </>
    )
}

{/* 
<section id="PhotoBG" class="PhotoHome PhotoHomeFeatured">

            <img id="Logo" class="Logo" src="images/logo/jeddie_logo-750px_2020.png" alt="Josh Eddie Photography">

        </section>
        
        <section id="featuredSets">
            
            <div id="featured1" class="featuredContainer">
                
                <a href="https://josheddiephotography.pixieset.com/shop/" target="_Blank" title="Shop Prints">

                    <img src="images/photos/FeaturedSets/Shop.jpg" id="featured1IMG"/>
                    <h2>Shop</h2>

                </a>
            
            </div>
            
            <div id="featured2" class="featuredContainer">
                
                <a href="#Landscape" title="Landscape Photos">

                    <img src="images/photos/FeaturedSets/Landscape.jpg"/>
                    <h2>Landscape</h2>

                </a>
            
            </div>
            
            <!--div id="featured3" class="featuredContainer" title="Josh & Colby Proposal Photos">

                <a href="JoshColby.html#JoshColby">

                    <img src="images/photos/FeaturedSets/JoshColby.jpg"/>
                    <h2>Josh & Colby <span class="featuredExtraText">Proposal</span></h2>

                </a>
            
            </div-->
            
            <div id="featured3" class="featuredContainer">

                <a href="#FamilyKids" title="Family & Kids Photos">

                    <img src="images/photos/FeaturedSets/FamilyKids.jpg" id="featured4IMG"/>
                    <h2>Family & Kids</h2>

                </a>
            
            </div>
            
            <div id="featured4" class="featuredContainer">

                <a href="#Cosplay" title="Cosplay">

                    <img src="images/photos/FeaturedSets/Comicpalooza21.jpg" id="featured4IMG"/>
                    <h2>Cosplay</h2>

                </a>
            
            </div>
            
            <div id="featured5" class="featuredContainer">

                <a href="FairfieldBaptist.html#Fairfield" title="Fairfield Baptist Church Photos">

                    <img src="images/photos/FeaturedSets/FairfieldBaptist.jpg"/>
                    <h2>Fairfield Baptist</h2>

                </a>
            
            </div>
            
            <!--div id="featured5" class="featuredContainer">

                <a href="DrewCakeSmash.html#DrewCakeSmash">

                    <img src="images/photos/FeaturedSets/DrewCakeSmash.jpg"/>
                    <h2>Drew Cake Smash</h2>

                </a>
            
            </div-->
            
            <div id="shopBottomRow" class="featuredContainer">
                
                <a href="https://josheddiephotography.pixieset.com/shop/" target="_Blank" title="Shop Prints">

                    <img src="images/photos/FeaturedSets/Shop.jpg" id="featured1IMG"/>
                    <h2>Shop</h2>

                </a>
            
            </div>
            
            <div id="featured6" class="featuredContainer">

                <a href="#Featured" title="See More Photos">

                    <img src="images/photos/FeaturedSets/MorePhotos2022.jpg" id="morePhotosIMG"/>
                    <h2>More Photos</h2>

                </a>
            
            </div>
        
        
        </section>
*/}