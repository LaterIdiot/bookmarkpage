const bookmarks = [
  {
    name: 'Tv9 Gujarati',
    url: 'https://www.youtube.com/c/TV9GujaratiNews',
    img: '',
  },
  {
    name: 'Sandesh',
    url: 'https://www.youtube.com/channel/UCiAH2s_M6nPfGZk-PpfyPkg',
    img: '',
  },
  {
    name: 'Aajtak Live TV - YouTube',
    url: 'https://www.youtube.com/watch?v=E9QXO5m_iS0',
    img: '',
  },
  {
    name: 'DD News',
    url: 'https://www.youtube.com/c/ddnews',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/DD_News.png',
  },
  {
    name: 'Live Tv | Vtv news',
    url: 'http://www.vtvgujarati.com/livetv',
    img: '',
  },
  {
    name: 'Stafford, VA',
    url: 'https://weather.com/weather/today/l/22554:4:US',
    img: '',
  },
  {
    name: 'Taarak Mehta',
    url: 'http://www.desi-serials.org/watch-online/sab-tv/taarak-mehta-ka-ooltah-chashmah-latest/',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/47/TMKOC.jpg',
  },
  {
    name: 'Gujarati News - News in Gujarati - Gujarati News Paper - ગુજરાતી સમાચાર - Divya Bhaskar',
    url: 'https://www.divyabhaskar.co.in/',
    img: '',
  },
  {
    name: 'GSTV NEWSCHANNEL - YouTube',
    url: 'https://www.youtube.com/user/gstvnewschannel',
    img: '',
  },
  {
    name: 'dwarkesh bawa - YouTube',
    url: 'https://www.youtube.com/results?search_query=dwarkesh+bawa',
    img: '',
  },
  {
    name: 'dhadhilila - YouTube',
    url: 'https://www.youtube.com/results?search_query=dhadhilila',
    img: '',
  },
  {
    name: 'vrajesh bava - YouTube',
    url: 'https://www.youtube.com/results?search_query=vrajesh+bava',
    img: '',
  },
  {
    name: 'Goswami 108 sri jay vallabha lalji mahoday sri part 1 - YouTube',
    url: 'https://www.youtube.com/results?search_query=Goswami+108+sri+jay+vallabha+lalji+mahoday+sri+part+1',
    img: '',
  },
  {
    name: 'Goswami 108 sri jay vallabha lalji mahoday sri part 1 - YouTube',
    url: 'https://www.youtube.com/watch?v=GS2a3Vs-8sw',
    img: '',
  },
  {
    name: 'Raju Pathak - YouTube',
    url: 'https://www.youtube.com/user/pathakraju44/videos',
    img: '',
  },
  {
    name: 'Raju Pathak - YouTube',
    url: 'https://www.youtube.com/user/pathakraju44/playlists',
    img: '',
  },
  {
    name: 'gujarati katha - YouTube',
    url: 'https://www.youtube.com/results?search_query=gujarati+katha',
    img: '',
  },
  {
    name: 'Shrimad Bhagvat Katha - 1 (by Ramesbhai Oza in Gujarati) - YouTube',
    url: 'https://www.youtube.com/watch?v=I74Ek2pueS0',
    img: '',
  },
  {
    name: 'Yeh Rishta Kya Kehlata Hai Watch All Episodes Online - DesiSerials.TV',
    url: 'http://www.desiserials.tv/watch-online/star-plus/yeh-rishta-kya-kehlata-hai-episodehd/',
    img: '',
  },
  {
    name: 'The Best Paper Airplane: How to Make a Paper Airplane | The Art of Manliness',
    url: 'http://www.artofmanliness.com/2014/09/16/how-to-make-the-worlds-best-paper-airplanes/',
    img: '',
  },
  {
    name: 'Shri Krishna Yog Vidhyapitham - YouTube',
    url: 'https://www.youtube.com/watch?v=8O29YznEc70',
    img: '',
  },
  {
    name: "Ashwin Sudani 'Guinness World Record Holder' Latest Speech in Gujarati (16-12-2016) - YouTube",
    url: 'https://www.youtube.com/watch?v=ODOSVUdEuF0',
    img: '',
  },
  {
    name: 'LIVE TV | Watch Zee News Live Streaming',
    url: 'http://zeenews.india.com/live-tv',
    img: '',
  },
  {
    name: 'Paramavatar Shri Krishna Watch Latest Telecast Online - Desi-Serials.NET',
    url: 'https://www.desi-serials.net/watch-online/and-tv/paramavatar-shri-krishna-hd/',
    img: '',
  },
  {
    name: 'दान लीला (भाग- 3) ।। रासाचार्य स्वामी श्री फ़तेहकृष्ण शर्मा ।। - YouTube',
    url: 'https://www.youtube.com/watch?v=PIUXinhtKBU',
    img: '',
  },
  {
    name: 'jhalkiya of shri madhur bihari rasleela mandal - YouTube',
    url: 'https://www.youtube.com/watch?v=_rWnk5NLXqQ',
    img: '',
  },
  {
    name: 'Tv9 Gujarati LIVE - YouTube',
    url: 'https://www.youtube.com/user/tv9gujaratlive',
    img: '',
  },
  {
    name: 'DD News Live (24X7) - YouTube',
    url: 'https://www.youtube.com/user/DDNewsofficial',
    img: '',
  },
  {
    name: 'Taarak Mehta Ka Ooltah Chashmah Online | Sab-TV Serial',
    url: 'https://apnetv.me/Hindi-Serial/Taarak-Mehta-Ka-Ooltah-Chashmah',
    img: '',
  },
  {
    name: 'Vishnu Puran # विष्णुपुराण # Episode-1 # BR Chopra Superhit Devotional Hindi TV Serial # - YouTube',
    url: 'https://www.youtube.com/watch?v=OdVfBXavJDY',
    img: '',
  },
  {
    name: 'Vishnu Puran Watch Latest Telecast Online - Desi Serials',
    url: 'https://www.desi-serials.me/watch-online/zee-tv/vishnu-puran/',
    img: '',
  },
  {
    name: 'Desi Serials',
    url: 'http://tvarticles.org/vidd.php?id=1833006',
    img: '',
  },
  {
    name: 'New tab',
    url: 'http://172.104.54.227:1935/trans/inewsup.stream_aac/playlist.m3u8',
    img: '',
  },
  {
    name: 'indiatvnews-lh.akamaihd.net/i/ITV_1@199237/master.m3u8',
    url: 'http://indiatvnews-lh.akamaihd.net/i/ITV_1@199237/master.m3u8',
    img: '',
  },
  {
    name: 'Sandesh News - YouTube',
    url: 'https://m.youtube.com/channel/UCiAH2s_M6nPfGZk-PpfyPkg',
    img: '',
  },
  {
    name: 'Live TV | VTV-Gujarati News',
    url: 'http://vtvgujarati.com/live-tv.php',
    img: '',
  },
];
