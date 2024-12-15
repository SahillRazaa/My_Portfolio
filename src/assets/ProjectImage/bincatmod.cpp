#include <iostream>
#include <vector>
#include <bitset>
#include <string>
using namespace std;

int MOD = 998244353;

long long multiMod(long long a, long long b, int mod) {
    return (a * b) % mod;
}

pair<string, long long> modulasCalc(long long n) {
    long long ans = 0;
    string binaryString = "";
    for (long long i = 1; i <= n; ++i) {
        string binary = bitset<64>(i).to_string();
        binary = binary.substr(binary.find('1')); 
        binaryString += binary;
        for (char bit : binary) {
            ans = multiMod(ans, 2, MOD);
            ans = (ans + (bit - '0')) % MOD; 
        }
    }
    return {binaryString, ans};
}

int main() {
    int test;
    cin >> test;
    vector<pair<string, long long>> anss;
    while (test--) {
        long long n;
        cin >> n;
        anss.push_back(modulasCalc(n));
    }
    for (auto& res : anss) {
        cout<<res.second<<endl;
    }
    return 0;
}
