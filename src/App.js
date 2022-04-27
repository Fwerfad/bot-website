import './App.css';
import logo from "./images/logo.png"
import '@coreui/coreui/dist/css/coreui.min.css'

import Footer from 'rc-footer';
import {CarouselElem} from "./components/Carousel";


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
        </div>
        <div className="Carousel-main">
            {CarouselElem()}
        </div>
        <div className="Containers">
            <div className="Cards-Container">
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Кто мы?</p>
                        </div>
                        <p>Мы команда опытных трейдеров, которые уже успели за долгие годы обжечься на крипто-рынке.
                        Начинали мы в 2014 году, не зная абсолютно ничего о механике рынка и техническом анализе.</p>
                        <p>За первый месяц торговли нам удалось утроить свой капитал, это дало нам иллюзию того,
                            что на рынке может заработать каждый! Конечно же это было только иллюзия…</p>
                        <p>В следующий месяц мы потеряли весь депозит. После этого нас начал мучить один вопрос:
                        не лотерея ли это? И задаваясь этим вопросом, мы все больше и больше теряли деньги на рынке.</p>
                        <p>Мы не использовали никакие методы, торговали на весь депозит без стоплоссов и спускали всю
                        свою зарплату на сделки. </p>
                        <p>В один прекрасный момент судьба свела моего друга с одним выдающимся трейдером еврооблигаций,
                        который работал в одном из коммерческих банков. Он то и стал для нас примером того, что на
                        рынке можно зарабатывать, используя торговую стратегию, строго контролируя риски и
                        придерживаясь дисциплины. С тех пор мы пришли к своему собственному походу, который дает
                        нам неплохие результаты. </p>
                        <p>Мы все время совершенствуемся и разрабатываем новые методики для увеличения прибыльности
                        нашей торговли, с чем мы бы и хотели поделиться с нашими подписчиками.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Наши методы:</p>
                        </div>
                        <p>Наши методы торговли заключаются в использовании технического анализа, “on-chain”анализа, чтении
                            торгового стакана и в тщательной подборке и обработке новостей рынка криптовалюты и фондового
                            рынка и макроэкономической ситуации в мире.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Зачем нам это нужно?</p>
                        </div>
                        <p>У вас может возникнуть вопрос: зачем нам нужно делиться с вами методикой, которая приносит деньги?
                            Дело в том, что выкладывая торговые стратегии и их результаты публично, мы чувствуем большую</p>
                        ответственность в принятии решений и получаем мотивацию для улучшения показателей эффективности нашей торговли.
                        <p>Для нас этот проект служит в главной степени стимулом к получению большей прибыли,
                            а плата за подписку на канале является приятным бонусом для нас) это мы скрывать не будем)</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Кому это нужно?</p>
                        </div>
                        <p>Подписка на наш телеграмм канал подойдет, как для трейдера новичка, который не знает с чего
                            начать изучение основ биржевой торговли, так и для профессионала, ищущего сигналы для входа в
                            сделку и интересные паттерны на графиках. Мы расскажем, с чего лучше начать или как развить уже
                            имеющиеся у тебя навыки трейдера и идти в ногу со временем и рынком.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Что ты получишь?</p>
                        </div>
                        <p>В нашем платном телеграм канале ты получишь:</p>
                        <p>⦁ Торговые стратегии по криптовалютам на спотовых и срочных рынках.</p>
                        <p>⦁ Советы по торговле криптовалютами</p>
                        <p>⦁ Основные принципы работы на бирже (ввод, вывод средств, размещение ордеров и т.д.)</p>
                        <p>⦁ Результаты поездок с блокчейн форумов и приглашения на закрытые встречи трейдеров нашего канала</p>
                        <p>⦁ Пособия по применении технического анализа для криптовалютного рынка</p>
                        <p>⦁ Пособия по использованию “on-chain” анализа для торговли (Glassnode)</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-text">
                        <div className="text-header">
                            <p>Давай к нам!</p>
                        </div>
                        <p>Если хочешь окунуться в мир современной торговли и научиться вкладывать свои деньги правильно,
                            обращайся к нам по следующим ссылкам:</p>
                        <p>Здесь ты найдешь всю необходимую информацию и поддержку твоих идей.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer
            columns={[
                {
                    icon: (
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                    )
                },
            ]}
            bottom="Не является финансовой рекомендацией"
        />
    </div>
  );
}

export default App;
