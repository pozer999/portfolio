import MyHeader from './components/UI/header/MyHeader';
import MyWelcomeContainer from './components/UI/welcomeContainer/MyWelcomeContainer';
import MySlideContainer from './components/UI/slideContainer/MySlideContainer';
import './styles/App.css';
import MyProjects from './components/UI/myProjects/MyProjects';

 let iconStack = [
  {src: 'img/iconsStack/iconHtml.png'},
  {src: 'img/iconsStack/iconCss.png'},
  {src: 'img/iconsStack/iconJs.png'},
  {src: 'img/iconsStack/iconReact.png'},
  {src: 'img/iconsStack/iconGit.png'},
  ];
let projectImages=[  
  <img src="img/login.png" alt='sorry'></img>,
  <img src="img/site_mouse_w.png" alt='sorry'></img>,
  <img src="img/product.png" alt='sorry'></img>,
  <img src="img/service.png" alt='sorry'></img>,
  <img src="img/shop1.png" alt='sorry'></img>,
  <img src="img/shop2.png" alt='sorry'></img>,
  <img src="img/shop3.png" alt='sorry'></img>,
  <img src="img/shop4.png" alt='sorry'></img>,
  <img src="img/shop5.png" alt='sorry'></img>,
  <img src="img/shop6.png" alt='sorry'></img>,
  <img src="img/siteMouse.png" alt='sorry'></img>,
  <img src="img/service_black.png" alt='sorry'></img>,
  <img src="img/shop1_black.png" alt='sorry'></img>,
  <img src="img/shop5_black.png" alt='sorry'></img>,
  <img src="img/login_black.png" alt='sorry'></img>,
];
let shades=[  
  <img src="img/shades/shades_1.jpg" alt='sorry'></img>,
  <img src="img/shades/shades_2.jpg" alt='sorry'></img>,
  <img src="img/shades/shades_3.jpg" alt='sorry'></img>,
  <img src="img/shades/shades_4.jpg" alt='sorry'></img>,
];
let yoga=[
  <img src="img/yoga.jpg" alt='sorry'></img>,
]
let mogo=[
  <img src="img/mogo.jpg" alt='sorry'></img>,
];
let iconConnection = [
  {src: 'img/iconConnection/iconGit_first.png', href: 'https://github.com/pozer999'},  
  {src: 'img/iconConnection/vk.png',  href: 'https://vk.com/pozer403'},
  {src: 'img/iconConnection/mail.png',  href: 'mailto: mishca29954@mail.ru'},
  {src: 'img/iconConnection/codewars.png',  href: 'https://www.codewars.com/users/pozer77'},
];
 

function App() {
  return (
    <div className='App'>
        <MyHeader fio = 'Жилин Михаил' title='Portfolio'/>
        <MyWelcomeContainer title="Welcome" imageSrc = "img/men.jpg">Привет! :) <br/> Я занимаюсь разработкой веб-сайтов.<br/> Ниже вы можете ознакомиться со стеком технологий, которые я использую для разработки.<br/> А также рассмотреть мои проекты, с прикрепленными ссылками на гитхаб.</MyWelcomeContainer>
        <MySlideContainer title="Technical Skills" imageSrc = {iconStack}></MySlideContainer>
        <MyProjects
        titleProjects = 'My Projects'
        projectImages={projectImages}
        shades={shades}
        yoga={yoga}
        mogo={mogo}
        />
        <MySlideContainer title="Connection" imageSrc = {iconConnection} description = "Если вдруг почта не открывается: mishca29954@mail.ru"></MySlideContainer>
    </div>
  );
}

export default App;
