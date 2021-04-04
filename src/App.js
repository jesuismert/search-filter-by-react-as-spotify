
import React from 'react';
import './App.scss';
import Nav from './components/Nav'
import searchicon from './components/img/Search.png'
import profilpic from './components/img/ProfilePic.png'
import field from './components/img/searchfield.png'
import vector from './components/img/Vector.png'
import rectangle from './components/img/Rectangle.png'
import like from './components/img/like.png'
import minicover from './components/img/MiniCover.png'
import ellipse from './components/img/Ellipse 1.png'
import playIcon from './components/img/play.png'
import ellipse3 from './components/img/Ellipse 3.png'
import rectangel2 from './components/img/rectangel2.png'




const url_api = "http://zmdp.cloud/iseAlim/spotify.json";

class PlayList extends React.Component {
  state = {                                                       //API ÇEKMEK İÇİN DİZİLERİMİZİ OLUSTURDUK
    allPlaylists: [],
    searchList: [],
    // recently: [],
    // recommended: [],
  };


componentDidMount() {                                             //API'DEN VERİLERİMİZİ ÇEKTİK
  fetch(url_api)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          allPlaylists: result.allPlaylists,
          // recently: result.recentlyPlayed,
          // recommended: result.recommended,
      });

    })
  	.catch(err => {});                                                   // HATA KONTROL
}
_onKeyUp = e => {                                                        //ARAMA YAPMAK İÇİN FONKSİYONUMUZU OLUSTURDUK
  const searchList = this.state.allPlaylists.filter(item =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  )

  this.setState({ searchList });
};


render() {
		return (
			<div className="Container">

        <div class="main">  <Nav />

        <div className="search-outer">
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action=""
          >


            <input
              type="search"
              onChange={this._onKeyUp}
              name="s"
              id="s"
              placeholder="Ara"
            />
            <img src={searchicon}/>
          </form>
          <img className="vector" src={vector}/>
          <img className="vector2" src={vector}/>
          <img className="field" src={field}/>
          <img className="profilpic" src={profilpic}/>
          <span>User Name ...</span>
        </div>


        <span className="title1"><h3> Yakında Çalanlar </h3></span>
        <span className="title2"><h3> Tavsiye Edilenler </h3></span>
        <span className="title3"><h3> Sevdiğin her şeyden biraz dinle.</h3></span>

			  	<ul className="data-list">

					{this.state.searchList.map((item, id) => (                               //VERİLERİMİZİ LİSTELEYİP GÖSTERMEK İÇİN>>>>>
					  	<li className={"block-" + id}>
                <img src={item.images[0].url} alt="image"></img>
              <a className="title">
								{item.name}
							</a>
							<a className="content">
                {item.description}
							</a>
              <img src={playIcon} className="abc"/>
					 	 </li>
				  	))}

			  	</ul>
        </div>


        <div className="BottomPlayer">
          <img className="minicover" src={minicover}/>
          <h3> One step Beyond </h3>
          <a>Madness</a>

          <img className="rectangle" src={rectangle}/>
          <img className="play" src={playIcon}/>
          <img className="ellipse3" src={ellipse3}/>
          <img className="playN" src={playIcon}/>
          <img className="playB" src={playIcon}/>
          <img className="rectangel2N" src={rectangel2}/>
          <img className="rectangel2B" src={rectangel2}/>
          <a class="start">00:00</a>
          <a class="end">02:18</a>
          <img className="like" src={like}/>
        </div>

      </div>
		);
	}
}
export default PlayList
