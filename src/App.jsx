import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';
import './SnakeGame.css';
import Music from './Music';
import Instruction from './Insctuction';

const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y]
}

const initialState = {
    food: getRandomCoordinates(),
    status: 0,
    speed: 150,
    direction: 'RIGHT',
    snakeDots: [
        [0, 0],
        [2, 0]
    ],
    highScore: Number(localStorage.getItem('snakeHighScore')) || 0,
    newHighScore: false,
    isStarted: false,
    isEnded: false,
}

class Game extends Component {
    constructor(props) {
        super(props)
        this.isGameOver = this.isGameOver.bind(this);
        this.isStartGame = this.isStartGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }
    state = initialState;

    componentDidMount() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate(prevState) {
        if (prevState.status != 2 && this.state.isEnded !== true) {
            this.checkIfOutOfBorders();
            this.checkIfCollapsed();
            this.checkIfEat();
        }
    }

    onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
                this.setState({ direction: 'UP' });
                break;
            case 40:
                this.setState({ direction: 'DOWN' });
                break;
            case 37:
                this.setState({ direction: 'LEFT' });
                break;
            case 39:
                this.setState({ direction: 'RIGHT' });
                break;
            case 68:
                this.setState({ direction: 'D' });
                break;
            case 65:
                this.setState({ direction: 'A' });
                break;
            case 83:
                this.setState({ direction: 'S' });
                break;
            case 87:
                this.setState({ direction: 'W' });
                break;
        }
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];
        const { speed, isStarted } = this.state;

        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2];
                break;
            case 'UP':
                head = [head[0], head[1] - 2];
                break;
            case 'D':
                head = [head[0] + 2, head[1]];
                break;
            case 'A':
                head = [head[0] - 2, head[1]];
                break;
            case 'S':
                head = [head[0], head[1] + 2];
                break;
            case 'W':
                head = [head[0], head[1] - 2];
                break;
        }
        dots.push(head);
        dots.shift();
        isStarted === true && speed != 0 && this.setState({
            snakeDots: dots
        })
    }

    checkIfOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            this.isGameOver();
        }
    }

    checkIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] == dot[0] && head[1] == dot[1]) {
                this.isGameOver();
            }
        })
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food[1]) {
            this.setState({
                food: getRandomCoordinates()
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
        if (this.state.snakeDots.length >= initialState.highScore) {
            initialState.highScore++
            localStorage.setItem('snakeHighScore', initialState.highScore - 1)
            initialState.newHighScore = true
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake
        })
    }

    increaseSpeed() {
        if (this.state.speed > 10) {
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }
    isStartGame() {
        this.setState({
            status: 1,
            isStarted: true,
        })
    }
    isGameOver() {
        this.setState({
            isEnded: true,
            speed: 0,
            status: 2,
        })
    }
    restartGame() {
        this.setState(initialState);
    }

    render() {
        console.log(this.state.status)
        if (this.state.status === 0 && this.state.isEnded !== true) {
            return (
                <div>
                <div className="startgame">
                    <div>SNAKE</div>
                    <button className = "button" onClick={this.isStartGame}>Start Game</button>
                </div>
                <Instruction />
                </div>
            );
        }
        else if (this.state.status === 2) {
            return (
                <div className="gameover">
                    <div id='GameOverText'>GAME OVER</div>
                    <div>Your score: {this.state.snakeDots.length}</div>
                    <div>
                        {this.state.newHighScore ? 'New local ' : 'Local '}high score:{' '}
                        {this.state.highScore}
                    </div>
                    <div className="restart" onClick={this.restartGame}>Press to restart</div>
                </div>
            );
        }
        return (
            <div>
                <div className="name-game">SNAKE</div>
                <div className = "container">
                <button className = "music" id = "mainRestart" onClick = {this.restartGame}>New Game</button>
                <Music url={'https://d7.hotplayer.ru/download/83cd30bc87ac1216b7890e617fb1b8b1/156905203_456240033/11c61541d908c-1af6714942e4-566d8e6e6ff/Hotline%20Miami%202%3A%20Wrong%20Number%20%28Confirmed%20Soundtrack%29%20-%20M.O.O.N.%20-%20Dust.mp3'} />
                </div>
                <div className="area">
                    <Snake snakeDots={this.state.snakeDots} />
                    <Food dot={this.state.food} />
                </div>
                <div className='score'>
                    HIGH-SCORE: {this.state.highScore}&ensp;&ensp;&ensp;&ensp;SCORE:{' '}
                    {this.state.snakeDots.length}
                </div>
            </div>
        );
    }
}

export default Game;