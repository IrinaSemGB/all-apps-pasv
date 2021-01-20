import React from 'react';
import './App.css';
import Label1 from "./HomeWorksComponents/Label1";
import LoginTitle from "./HomeWorksComponents/LoginTitle";
import LoginInput from "./HomeWorksComponents/LoginInput";
import PasswordTitle from "./HomeWorksComponents/PasswordTitle";
import PasswordInput from "./HomeWorksComponents/PasswordInput";
import LoginButton from "./HomeWorksComponents/LoginButton";
import RegistrationButton from "./HomeWorksComponents/RegistrationButton";
import MoodTable from "./HomeWorksComponents/MoodTable";
import SomeText from "./HomeWorksComponents/SomeText";
import TableTitle from "./HomeWorksComponents/TableTitle";
import MainMenu from "./HomeWorksComponents/MainMenu";
import FooterMenu from "./HomeWorksComponents/FooterMenu";
import CounterList from "./Counter/CounterList";
import ToDoList from "./Todo/ToDoList";
import MathGameStart from "./MathGame/MathGameStart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Kanban from "./Canban/Kanban";

function App() {

    const mainMenu = [
        {
            link: '/docs',
            title: 'Docs',
            id: 'docs'
        },
        {
            link: '/tutorial',
            title: 'Tutorial',
            id: 'tutorial'
        },
        {
            link: '/blog',
            title: 'Blog',
            id: 'blog'
        },
        {
            link: '/community',
            title: 'Community',
            id: 'community'
        },
        {
            link: '/languages',
            title: 'Languages',
            id: 'languages'
        },
        {
            link: '/git',
            title: 'Git',
            id: 'git'
        },
        {
            link: '/search',
            title: 'Search',
            id: 'search'
        },
    ];

    const footerMenu = [
        {
            link: '/github',
            title: 'GitHub',
            id: 'github'
        },
        {
            link: '/stackOverflow',
            title: 'Stack Overflow',
            id: 'stackOverflow'
        },
        {
            link: '/discussion',
            title: 'Discussions Forums',
            id: 'discussion'
        },
        {
            link: '/devCommunity',
            title: 'DEV Community',
            id: 'devCommunity'
        },
        {
            link: '/facebook',
            title: 'Facebook',
            id: 'facebook'
        },
        {
            link: '/twitter',
            title: 'Twitter',
            id: 'twitter'
        },
    ];


  return (
    <div className="App">

        <div>
            <MainMenu mainMenuItems={mainMenu}/>
        </div>

        <div><Label1/></div>

        <div>
            <LoginTitle/>
            <div id='LoginInput'><LoginInput/></div>
        </div>

        <div>
            <PasswordTitle/>
            <div id='PasswordInput'><PasswordInput/></div>
        </div>

        <div><LoginButton/></div>
        <div><RegistrationButton/></div>

        <div>
            <TableTitle/>
            <MoodTable/>
        </div>

        <div><SomeText/></div>

        <h1>---------- Counters ----------</h1>
        <div><CounterList/></div>

        <h1>---------- ToDo List ----------</h1>
        <div><ToDoList/></div>

        <h1>---------- Math App ----------</h1>
        <div><MathGameStart/></div>

        <h1>---------- Kanban Board ----------</h1>
        <div><Kanban/></div>

        <div>
            <FooterMenu footerMenuItems={footerMenu}/>
        </div>

    </div>
  );
}

export default App;
