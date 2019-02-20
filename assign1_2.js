// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    let set1 = new Set();
    let len = string.length;
    let freq = new Object();
    for (let i = 0; i < len; i++) {
        if (
            (string[i] >= "a" && string[i] <= "z" || string[i] >= "A" && string[i] <= "Z") 
            && string[i] != " " 
            && !s1.has(string[i])
        ) {
            set1.add(string[i]);
            let count = 1;
            for (let j = i + 1; j < len; j++) {
                if (string[j] == string[i])
                    cnt++;
            }
            freq[string[i]] = count;
        }
    }
    return freq;
}