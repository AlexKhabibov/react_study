/**Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях. */

import { TextField, Button } from "@mui/material";
import { useState } from "react";

function TemperatureConverter() {

    const [celsTemp, setCelsTemp] = useState('');
    const [fahrTemp, setFahrTemp] = useState('');

    const convertTemperature = () => {
        if (celsTemp) {
            // Конвертация Цельсия в Фаренгейт
            const fahr = (parseFloat(celsTemp) * 9 / 5) + 32;
            setFahrTemp(fahr.toFixed()); // Обновляем фаренгейт
        } else if (fahrTemp) {
            // Конвертация Фаренгейта в Цельсий
            const cels = (parseFloat(fahrTemp) - 32) * 5 / 9;
            setCelsTemp(cels.toFixed()); // Обновляем цельсий
        }
    };

    // const convertTemperature = () => {
    //     // Проверяем, введено ли значение в Цельсии
    //     if (celsTemp) {
    //         const celsius = parseFloat(celsTemp);
    //         if (isNaN(celsius)) {
    //             alert('Пожалуйста, введите корректное число в поле Цельсий');
    //             return; // Прерываем функцию, если введено не число
    //         }
    //         // Конвертация Цельсия в Фаренгейт
    //         const fahr = (celsius * 9 / 5) + 32;
    //         setFahrTemp(fahr.toFixed(2)); // Обновляем фаренгейт
    //     }
    //     // Проверяем, введено ли значение в Фаренгейте
    //     else if (fahrTemp) {
    //         const fahrenheit = parseFloat(fahrTemp);
    //         if (isNaN(fahrenheit)) {
    //             alert('Пожалуйста, введите корректное число в поле Фаренгейт');
    //             return; // Прерываем функцию, если введено не число
    //         }
    //         // Конвертация Фаренгейта в Цельсий
    //         const cels = (fahrenheit - 32) * 5 / 9;
    //         setCelsTemp(cels.toFixed(2)); // Обновляем цельсий
    //     } else {
    //         alert('Пожалуйста, введите температуру в одно из полей');
    //     }
    // };


    return (
        <div>
            <TextField
                onChange={(e) => setCelsTemp(e.target.value)}
                value={celsTemp}
            />
            <TextField
                onChange={(e) => setFahrTemp(e.target.value)}
                value={fahrTemp}
            />
            <Button onClick={convertTemperature} variant="contained">Конвертировать температуру</Button>
        </div>
    );
}

export default TemperatureConverter;