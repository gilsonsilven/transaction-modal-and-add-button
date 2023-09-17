
const TransactionModal = () => {
    return (
        <div className="w-96 h-96 p-5 bg-white rounded-2xl">
            <div className="h-11 flex-col justify-between">
                <p className="text-slate-700 text-lg font-normal font-['Roboto']">Nova despesa</p> 
                <hr className="w-90 h-px border border-slate-700" /> 
            </div>
            <div className="flex">
                <input type="nome" name="nome" placeholder="Nome" className="border-l border-b border-slate-700" />
                <div className="w-30 h-11 p-2 border-b border-slate-700 justify-start items-center gap-2 inline-flex">
                    <div className="text-slate-600 text-3xl font-normal font-['League Spartan']">R$ 00,00</div>
                </div>
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>

        </div>        
    )
}

export default TransactionModal