// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции

export default function MyButton({func, text, type}) {
    return <button type={type} onClick={func}>{text}</button>
  }
  
