import React from 'react';
import {
    Jumbotron,
    Button,
} from 'reactstrap';

class MyJymbotron extends React.Component {
    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Задание проекта</h1>
                <p>Вывести посты с возможностью просмотра детальной информации (комментариев), продемонстрировать переключение страниц при помощи React-Router, сделать постраничную пагинацию, продемонстрировать работу с CSS Modules</p>
             
            </Jumbotron>
        );
    }
}

export default MyJymbotron;