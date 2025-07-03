# Arowana Swap

Arowana Swap is the core swapping functionality within the Arowana Protocol, allowing users to exchange AGT with other assets (such as USDT and ARW tokens) through liquidity pools without the need for an order book.

***

### 1. Liquidity Pools

* **Supported Pools**
  * **AGT/USDT**
  * **AGT/ARW**&#x20;
  * **USDT/ARW**
* **Additional pools due to protocol extensions**
  * As the protocol expands, more asset pairs and liquidity pools will be introduced to support additional trading pairs and ecosystem growth.

***

### 2. Liquidity Provider Incentives

* **Fee Distribution**
  * A portion of the transaction fees generated within each pool is distributed to liquidity providers based on their share of the pool.
* **ARW Token Rewards**
  * To incentivize liquidity provisioning, additional ARW token rewards are distributed to LPs.

***

### 3. Minting and Burning Mechanism

* **AGT Value Peg**
  * AGT is the protocol’s core asset, and its value is pegged to physical gold.

***

### 4. LP Incentive Details

* **Initial Liquidity Importance**
  * Sufficient initial liquidity is essential to ensure smooth operation and stable trading on Arowana Swap.
* **Fee Allocation Example**
  * Each trade incurs a fee (e.g., **0.3%** per transaction).
  * For example, in an `AGT/USDT` pool, a trade worth 1 USDT would incur a 0.003 USDT fee.&#x20;
  * This fee is then proportionally distributed to all LPs based on their pool share.
* **ARW Token Reward**
  * In addition to transaction fees, LPs are rewarded with ARW tokens.
  * Example: An **annualized yield (APY) of \~10%** in ARW tokens may be provided.&#x20;
  * These rewards are dynamically adjusted depending on the protocol’s policies and pool size

***

### 5. Reward Distribution Methods

* **Automatic Staking**
  * ARW rewards accumulate automatically when liquidity is deposited into a pool.
* **Manual Claim**
  * LPs can manually claim their accumulated ARW rewards through the dashboard or smart contract interaction.
