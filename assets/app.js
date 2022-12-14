const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

//thu nho cd
const cd = $('.cd')
//loadCurrentSong
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
//lang nghe play
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');



const app = {
  currentIndex : 0,
  isPlaying : false,
  isRandom : false,
  isRepeat : false,
  config : JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Nobody Can Drag Me Down",
      singer: "One Direction",
      path: "https://mp3.filmisongs.com/go.php?id=Drag%20Me%20Down%20-%20One%20Direction.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/01/Drag-Me-Down-One-Direction.jpg"
    },
    {
      name: "Dynamite",
      singer: "BTS",
      path:
        "https://mp3.filmisongs.com/go.php?id=Dynamite%20-%20BTS.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/01/Dynamite-BTS.jpg"
    },
    {
      name: "Life Goes On Song",
      singer: "BTS",
      path: "https://mp3.filmisongs.com/go.php?id=BTS%20-%20Life%20Goes%20On%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/08/BTS-Life-Goes-On-Mp3-Song-Download.jpg"
    },
    {
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },{
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },{
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    }
  ],
  setConfig : function(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  //render hi???n th??? list b??i h??t
  render: function () {
        const hmtls = this.songs.map((song, index) => {
            return ` 
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index ="${index}" >
                <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          `
        })
        playlist.innerHTML = hmtls.join('')
    },

  //hi???n th??? b??i h??t ??ang ph??t 
  defineProperties: function(){
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },

  // c??c thao t??c t????ng t??c 
  handleEvents: function() {  
    const _this = this
    const cdWidth = cd.offsetWidth

    // x??? l?? CD quay v?? d???ng 
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)'}
    ], { 
      duration: 10000, // 10seconds
      iterations: Infinity
    })
    cdThumbAnimate.pause()
    
    
    // x??? l?? khi ph??ng to thu nh??? CD
    document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCDWidth = cdWidth - scrollTop

      cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0
      cd.style.opacity = newCDWidth / cdWidth
    }

    //x??? l?? kh?? k??ch play
    playBtn.onclick = function() {
      if (_this.isPlaying){
        audio.pause()     
      }
      else {
        audio.play()
      }
    }

    // khi song ???????c play
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    // khi song b??? pause
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }

    // khi ti???n ????? b??i h??t thay ?????i 
    audio.ontimeupdate = function() {
      if (audio.duration) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
        progress.value = progressPercent
      }
    }

    // x??? l?? khi tua song
    progress.onchange = function(e) {
      const seekTime = audio.duration / 100 * e.target.value
      audio.currentTime = seekTime
    }

    // khi next b??i h??t
    nextBtn.onclick = function() {
      if (_this.isRandom){
        _this.playRandomSong()
      } else {
         _this.nextSong() 
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    //khi pre b??i h??t 
    prevBtn.onclick = function() {
      if (_this.isRandom){
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play() 
      _this.render()
      _this.scrollToActiveSong()
    }

    //n??t ramdom b???t t???t
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    }

    //x??? l?? next song khi end b??i h??t
    audio.onended = function() {
      if (_this.isRepeat){
        audio.play()
      } else {
      nextBtn.click()
      }
    }
    //xu li nut repeat
    repeatBtn.onclick = function () {
      _this.isRepeat =!_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    }

    //l???ng nghe h??nh vi click v??o playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)')
      if (songNode || e.target.closest('.option')){
         // x??? l?? khi click v??o song
         if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
          
         }

         // x??? l?? khi click v??o song option
         if (e.target.closest('.option')){}

      }
    }
  },

  //load b??i h??t ??ang ph??t
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },

  //next song
  nextSong: function () {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong()
  },

 // prev song
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0 ) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  scrollToActiveSong : function () {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    },100)
  },


  // h??m ch???y js
  start: function () {
    //g??n c???u h??nh t??? config v??o ???ng d???ng
    this.loadConfig() 

    // ?????nh ngh??a c??c thu???c t??nh cho object
    this.defineProperties()
    
    // L???ng nghe v?? x??? l?? c??c s??? ki???n
    this.render()

    //  T???i th??ng tin b??i h??t ?????u ti??n v??o UI ch???y ???ng d???ng
    this.loadCurrentSong()

    // Render playlist
    this.handleEvents()

    // hi???n tr??? tr???ng th??i ban ?????u c???a button 
    randomBtn.classList.toggle("active", this.isRandom)
    repeatBtn.classList.toggle("active", this.isRepeat)
  }
}

app.start();
