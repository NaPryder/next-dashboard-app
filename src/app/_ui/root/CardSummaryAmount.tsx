
declare interface CardSummaryAmount {
    amount: string;
    keyword: string;
    delta: number;
}
const CardSummaryAmount = ({ amount, keyword, delta }: CardSummaryAmount) => {

    const deltaColor = delta > 0 ? 'text-green-700' : 'text-red-500'


    return (
        <div className='card-container'>
            <strong className='text-3xl mx-auto mt-2'>{amount}</strong>
            <p className='text-sm mx-auto'>{keyword}</p>
            <b className={`text-xs ml-auto mr-0 mt-[-5px] ${deltaColor}`}>
                {delta > 0 ? `+` : ''}{delta}%
            </b>
        </div>
    )
}

export default CardSummaryAmount
