

export default function CurrencyRow({currencyOption, selectedCurrency, onChange, onChangeAmount, amount}) {
    return (
        <div>
         <input type='number' value={amount} onChange={onChangeAmount} />
         <select value={selectedCurrency} onChange={onChange}>
            {currencyOption.map(option =>(
                <option key={option} value={option}>{option}</option>
            ))}
         </select>
        </div>
    )
}
