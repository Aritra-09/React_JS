import { useState } from 'react'
import Input_Box from './components/Input_Box'
import useCurrency_Info from './hooks/useCurrency_Info'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const From_currency_info = useCurrency_Info(from);
  const To_currency_info = useCurrency_Info(to);

  const From_currecyList = Object.keys(From_currency_info);
  const To_currecyList = Object.keys(To_currency_info);

  


  function swap() {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

  const converter = () => {
    setConvertedAmount (amount * From_currency_info[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        converter();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input_Box
                            label="From"
                            amount={amount}
                            currencyoption={From_currecyList}
                            onCurrencyChange={(curr) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input_Box
                            label="To"
                            amount={convertedAmount}
                            currencyoption={To_currecyList}
                            onCurrencyChange={(curr) => {
                              setTo(curr)
                            }}
                            selectCurrency={to}

                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
