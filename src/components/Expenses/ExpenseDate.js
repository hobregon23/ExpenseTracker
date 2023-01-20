import "./ExpenseDate.css"

function ExpenseDate(props) {
    const lowerCase = props.date.toLocaleString('es-ES', {month: 'long'});
    const month = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    const day = props.date.toLocaleString('es-ES', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;