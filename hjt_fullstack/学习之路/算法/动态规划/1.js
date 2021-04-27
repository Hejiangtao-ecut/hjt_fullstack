// 力扣 322

var coinChange = function (coins, amount) {
    const MAX = 10001;
    const db = new Array(amount+1).fill(MAX);
    for(let i = 0;i<coins.length;i++){
        dp[0] = 0;
        // 直接从硬币的值开始
        for(let j = coins[i];j<=amount;j++){
            dp[j] = Math.min(dp[i],dp[i-coins[j]]+1)
        }
    }
    return dp[amount] == MAX? -1: dp[amount]
};