# AGT Mint / Redeem

### AGT Minting

Users can mint AGT tokens by depositing stablecoins. Upon minting, AGT tokens are issued directly to the users wallet, and an equivalent amount of physical gold is securely stored in a vault through a SPC Special Purpose Company.

* **If gold reserves are available**: The AGT tokens are minted immediately upon request.
* **If gold reserves are insufficient**: The minting request enters a **settlement period**, during which the protocol procures the corresponding amount of physical gold. AGT is then issued once the gold is secured.&#x20;
* **Slippage setting:** Users may specify acceptable slippage during the minting request. If the price moves beyond the set slippage range, the mint request is automatically canceled.

***

### AGT Redeem

Users can request to redeem their AGT holdings for physical gold. Upon request, the corresponding AGT tokens are burned. The protocol then completes the redemption via an off-chain process, returning either the equivalent amount of physical gold or the original collateral asset used for minting.

***

### Oracle and Data Integrity

The real-time value of AGT is synchronized with the gold price XAU/USD through the Chainlink oracle network. \
The protocol ensures the technical reliability of AGT by leveraging a Proof-of-Reserve PoR structure for transparent on-chain verification of asset backing.

| Category  | Detail  |
|--------|--------|
| Price Sync  | Based on XAU/USD  |
| Refresh Interval  | Typically updated within 1 minute  |
| PoR vMechanism  | Chainlink PoR Proof of Reserve automatically verifies whether the issued AGT supply matches the amount of physical gold held in custody  |

This provides users with reliable, real-time asset data linked to external market prices.
