import Header from "@/components/Header"
import TransactionModal from "@/components/transacoes/TransactionModal"
import AddTransactionButton from "@/components/transacoes/AddTransactionButton"
import ModalTeste from "@/components/transacoes/ModalTeste"

const Receitas = () => {

    return (
      <>
        <Header title="Receitas" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4"/> 
        <div>Receitas</div>
        <div className="m-10">
          <AddTransactionButton />
        </div>
        <div>
          
        </div>
      </>
    )
  }

  export default Receitas