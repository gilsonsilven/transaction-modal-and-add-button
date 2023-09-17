import Header from "@/components/Header"
import TransactionModal from "@/components/transacoes/TransactionModal"

const Receitas = () => {
    return (
      <>
        <Header title="Receitas" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4"/> 
        <div>Receitas</div>
        <div className="m-10">
          <TransactionModal />
        </div>
      </>
    )
  }

  export default Receitas