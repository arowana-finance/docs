# Arowana Finance

### **Arowana Lending Protocol**

The Arowana Lending Protocol is a decentralized lending platform that enables users to borrow stablecoins e.g., USDT by using AGT tokens as collateral.\
Simultaneously, users can participate in various liquidity products by depositing USDT into liquidity pools LPs, earning rewards and receiving additional ARW token incentives.\
The following sections provide a detailed explanation of the protocols collateral structure, loan to value LTV ratios, reward mechanisms, liquidation processes, deposit structure, and incentive policies


### 1. Collateralized Lending Structur

* **AGT Collateral Loan**
  * Each collateral asset is subject to a maximum Loan-to-Value LTV ratio, with AGT allowing up to
    &#x20;80 .
  * For example, if a user deposits 10 AGT 10g of gold as collateral and the total value of AGT
    \
    is 3,000 USDT, the user can borrow up to 2,400 USDT

***

### 2. LP Deposit Rewards

* **Reward Structure**
  * LP reward structures are designed to be dynamic based on supply and demand.
  * When borrowing demand increases and liquidity within the pool becomes insufficient, rewards
    &#x20;for LP deposits rise accordingly. Conversely, when liquidity is abundant, reward rates may
    &#x20;decrease.
  * In the event of significant fluctuations in the price of gold, the protocol may adjust reward
    \
    parameters to reflect changes in collateral value.

***

### 3. Reward Structure

* **Variable Rate**
  * Rewards fluctuate based on supply and demand and are determined based on the **Utilization Rate** of the liquidity pool.
* **Factors Determining Rewards**
  * **Utilization Rate**: Higher borrowing demand increases reward, while lower
    &#x20;demand decreases them.
  * **Price Volatility**: Adjustments are made based on the stability of gold prices.
  * **Protocol Policy**: Reward rate ranges can be set through governance voting.

***

### 4. Liquidation Mechanism

*   **Liquidation Threshold**

    | Liquidation Thresholds | LTV       |
    | ---------------------- | --------- |
    | Liquidation Thresholds | LTV > 85% |

    * If the LTV of the collateral exceeds the liquidation threshold 75 for AGT or 85 for 1kg Gold
      &#x20;NFTs, the Arowana Lending Protocol automatically executes partial liquidation via smart
      &#x20;contracts.
    * This involves selling a portion of the collateral to repay the excess loan amount,
      &#x20;restoring the LTV to a safe range below 70 for AGT or below 80 for 1kg Gold NFTs.

    \

*   **Example of Partial Liquidation**

    |                       |                     |
    | --------------------- | ------------------- |
    | Colleateral Value     | 1,000 USDT (10 AGT) |
    | Loan Amount           | 800 USDT (LTV 80%)  |
    | Liquidation Threshold | LTV 85% = 850 USDT  |


-
    1. **Scenario 1: Collateral Value Decline**
       * AGT value decreases to 950 USDT LTV 800 / 950 ≈ 84.2%.
       * Since the LTV has not reached the liquidation threshold 85 , no
         &#x20;liquidation is triggered.
    2. **Scenario 2: Further Coll-teral Value Decline**
       * AGT value decreases to 930 USDT LTV 800 / 930 ≈ 86.0%.
       * LTV exceeds the liquidation threshold 85 , triggering the liquidation
         &#x20;process.

***

### 5. Liquidation Process

* **Calculate Excess Loan Amount**
  * Restore LTV to the safe range 80 for AGT.
  * Maximum loan amount at safe LTV: 930 USDT 80 744 USDT.
  * Amount to be repaid: 800 - 744 56 USDT.
* **Calculate AGT to Sell**
  * Current AGT price: 930 USDT initial AGT quantity 10 93 USDT/AGT.
  * AGT quantity to sell: 56 USDT / 93 USDT ≈ 0.60 AGT.
* **Adjust Remaining Collateral and Loan Balance**
  * Remaining AGT after sale: 10 - 0.60 ≈ 9.40 AGT.
  * Loan balance reduced from 800 USDT to 744 USDT.
  * Final LTV 744 / 930 80 , successfully restored to the safe range.

***

### 6. Staking Model and Rewards

* #### **Staking Model**
  * The staking model is designed to allow users to earn ARW token rewards by depositing their
    &#x20;ARW tokens.
  * A portion of the protocols revenue, including interest paid by borrowers, is
    &#x20;distributed to stakers.
  * The reward rate is adjusted based on the staking amount and duration.
