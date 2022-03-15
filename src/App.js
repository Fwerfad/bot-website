import './App.css';
import logo from "./images/logo.png"
import im2 from "./images/2.png"
import im3 from "./images/3.png"
import im4 from "./images/4.png"
import im5 from "./images/5.png"
import im6 from "./images/6.png"
import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'


function App() {

    return (
    <div className="App">
        <div className="App-header-outer">
            <header className="App-header">
                <div className="App-header-container">
                    <div className="App-header-text">
                        <text>D&B Trading</text>
                    </div>
                </div>
                <div className="App-header-container">
                    <div className="App-header-text">
                        <img width="40px" height="40px" src={logo} />
                    </div>
                </div>
            </header>
            <header className="App-menu">
                <div className="App-menu-text"></div>
                <div className="App-menu-text"><text>
                    Кто мы
                </text></div>

                <div className="App-menu-text"><text>
                    Наша цель
                </text></div>

                <div className="App-menu-text"><text>
                    Ваша выгода
                </text></div>

                <div className="App-menu-text"><text>
                    Контакты
                </text></div>
                <div className="App-menu-text"></div>
            </header>
        </div>
        <div>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-inline-block w-50" src={im2} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-inline-block w-50" src={im3} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-inline-block w-50" src={im4} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>

                <CCarouselItem>
                    <CImage className="d-inline-block w-50" src={im5} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>

                <CCarouselItem>
                    <CImage className="d-inline-block w-50" src={im6} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </div>
        <div className="Containers">
            <div className="Cards-Container">
                <div className="Card">
                    <div className="Card-text">
                        <p>Мы команда опытных трейдеров, которые уже успели за долгие годы обжечься на крипто-рынке. Начинали мы в 2014 году, не зная абсолютно ничего о механике рынка и техническом анализе.</p>
                            <p>За первый месяц торговли нам удалось утроить свой капитал, это дало нам иллюзию того, что на рынке может заработать каждый ! Конечно же это было только иллюзия… В следующий месяц мы потеряли весь депозит. После этого нас начал мучить один вопрос: не лотерея ли это? И задаваясь этим вопросом, мы все больше и больше теряли деньги на рынке. Мы не использовали никакие методы, торговали на весь депозит без стоплоссов и спускали всю свою зарплату на сделки. Потом в один прекрасный момент судьба свела моего друга с одним выдающимся трейдером еврооблигаций, который работал в одном из коммерческих банков. Он то и стал для нас примером того, что на рынке можно зарабатывать, используя торговую стратегию, строго контролируя риски и придерживаясь дисциплины.  С тех пор мы пришли к своему собственному походу, который дает нам неплохие результаты. Мы все время совершенствуемся и разрабатываем новые методики для увеличения прибыльности нашей торговли, с чем мы бы и хотели поделиться с нашими подписчиками.</p>
                            <p>Наши методы торговли заключаются в использовании технического анализа, “on-chain”анализа, чтении торгового стакана и в тщательной подборке и обработке новостей рынка криптовалюты и фондового рынка и макроэкономической ситуации в мире.</p>

                    </div>
                </div>
                <div className="Card">
                    <p>Вы спросите один вопрос? Зачем нам нужно делиться с вами методикой, которая приносит деньги? Дело в том, что выкладывая торговые стратегии и их результаты публично, мы чувствуем большую ответственность в принятии решений и получаем мотивацию для улучшения показателей эффективности нашей торговли. Для нас этот проект служит в главной степени стимулом к получению большей прибыли, а плата за подписку на канале является приятным бонусом для нас) это мы скрывать не будем)</p>


                </div>
                <div className="Card">
                    <p>Подписка на наш телеграмм канал подойдет, как для трейдера новичка, который не знает с чего начать изучение основ биржевой торговли, так и для профессионала, ищущего сигналы для входа в сделку и интересные паттерны на графиках. Мы расскажем, с чего лучше начать или как развить уже имеющиеся у тебя навыки трейдера и идти в ногу со временем и рынком.</p>
                    <p>В нашем платном телеграм канале ты получишь:</p>
                    <p>⦁	Торговые стратегии по криптовалютам на спотовых и срочных рынках.</p>
                    <p>⦁	Советы по торговле криптовалютами</p>
                    <p>⦁	Основные принципы работы на бирже (ввод, вывод средств, размещение ордеров и т.д.)</p>
                    <p>⦁	Результаты поездок с блокчейн форумов и приглашения на закрытые встречи трейдеров нашего канала</p>
                    <p>⦁	Пособия по применении технического анализа для криптовалютного рынка</p>
                    <p>⦁	Пособия по использованию “on-chain” анализа для торговли (Glassnode)</p>
                </div>
                <div className="Card">
                    <p>Если хочешь окунуться в мир современной торговли и научиться вкладывать свои деньги правильно, обращайся к нам по следующим ссылкам:</p>
                    <p>Здесь ты найдешь всю необходимую информацию и поддержку твоих идей.</p>
                    <p>P.S. Поспеши, биткойн вновь обновил свой исторический максимум ;)</p>
                </div>
            </div>
        </div>
        <div className="Footer">

        </div>
    </div>
  );
}

export default App;
