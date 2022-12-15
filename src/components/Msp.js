import React from 'react'
import './msp.css'

function Msp() {
  return (
    <div className='di'>
        <div className="msp-content">
            <h2 className="c" >Minimum Support Prices (MSPs)</h2> 
            <p>MSP is the guaranteed minimum floor price that farmer must get from the government in case the market price of the crops falls below the MSP.
            <br/>
            <span className='ok' >*Projected Crop:</span> Avg amount of money required to produce one quintal of a given crop.
            </p>
           
            <h3 className="c" >for Kharif Marketing Season (KMS) 2021-22</h3>
            <table className="table table-bordered table-hover tab">
                <thead>
                    <tr className="table" >
                        <th scope="col" className="t-c">Crops</th>
                        <th scope="col" className="c">Projected Cost KMS 2021-22 (Rs/q)</th>
                        <th scope="col" className="c">MSP (Rs/q)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Paddy (Common)</th>
                           <td className="c">1,245</td>
                           <td className="c">1,868</td>
                    </tr>
                    <tr>
                        <th scope="row">Paddy (Grade A)</th>
                           <td className="c">   -   </td>
                           <td className="c">1,888</td>
                    </tr>
                    <tr>
                        <th scope="row">Jowar (Hybrid)</th>
                           <td className="c">1,746</td>
                           <td className="c">2,620</td>
                    </tr>
                    <tr>
                        <th scope="row">Jowar (Maldandi)</th>
                           <td className="c"> - </td>
                           <td className="c">2,640</td>
                    </tr>
                    <tr>
                        <th scope="row">Bajra</th>
                           <td className="c">1,175</td>
                           <td className="c">2,150</td>
                    </tr>
                    <tr>
                        <th scope="row">Ragi</th>
                           <td className="c">2,194</td>
                           <td className="c">3,295</td>
                    </tr>
                    <tr>
                        <th scope="row">Maize</th>
                           <td className="c">1,213</td>
                           <td className="c">1,850</td>
                    </tr>
                    <tr>
                        <th scope="row">Tur (Arhar)</th>
                           <td className="c">3,796</td>
                           <td className="c">6,000</td>
                    </tr>
                    <tr>
                        <th scope="row">Moong</th>
                           <td className="c">4,797</td>
                           <td className="c">7,196</td>
                    </tr>
                    <tr>
                        <th scope="row">Urad</th>
                           <td className="c">3,660</td>
                           <td className="c">6,000</td>
                    </tr>
                    <tr>
                        <th scope="row">Groundnut</th>
                           <td className="c">3,515</td>
                           <td className="c">5,275</td>
                    </tr>
                    <tr>
                        <th scope="row">Sunflower Seed</th>
                           <td className="c">3,921</td>
                           <td className="c">5,885</td>
                    </tr>
                    <tr>
                        <th scope="row">Soybean (yellow)</th>
                           <td className="c">2,587</td>
                           <td className="c">3,880</td>
                    </tr>
                    <tr>
                        <th scope="row">Sesamum</th>
                           <td className="c">4,570</td>
                           <td className="c">6,855</td>
                    </tr>
                    <tr>
                        <th scope="row">Nigerseed</th>
                           <td className="c">4,462</td>
                           <td className="c">6,695</td>
                    </tr>
                    <tr>
                        <th scope="row">Cotton (Medium Staple)</th>
                           <td className="c">3,676</td>
                           <td className="c">5,515</td>
                    </tr>
                    <tr>
                        <th scope="row">Cotton (Long Staple)</th>
                           <td className="c"> - </td>
                           <td className="c">5,825</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h3 className="c" >for Rabi Marketing Season (RMS) 2021-22</h3>
            <table className="table table-bordered table-hover tab">
                <thead>
                    <tr className="table" >
                        <th scope="col" >Crops</th>
                        <th scope="col" className="c">Projected Cost RMS 2021-22 (Rs/q)</th>
                        <th scope="col" className="c">MSP (Rs/q)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Wheat</th>
                           <td className="c">923</td>
                           <td className="c">1,925</td>
                    </tr>
                    <tr>
                        <th scope="row">Barley</th>
                           <td className="c">919</td>
                           <td className="c">1,525</td>
                    </tr>
                    <tr>
                        <th scope="row">Gram</th>
                           <td className="c">2,801</td>
                           <td className="c">4,875</td>
                    </tr>
                    <tr>
                        <th scope="row">Lentil</th>
                           <td className="c">2,727</td>
                           <td className="c">4,800</td>
                    </tr>
                    <tr>
                        <th scope="row">Rapeseed & Mustard</th>
                           <td className="c">2,323</td>
                           <td className="c">4,425</td>
                    </tr>
                    <tr>
                        <th scope="row">Safflower</th>
                           <td className="c">3,470</td>
                           <td className="c">5,215</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Msp
