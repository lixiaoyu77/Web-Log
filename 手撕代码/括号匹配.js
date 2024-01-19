// 基本思路是遍历字符串，当遇到左括号时将其压入栈中，当遇到右括号时，检查栈顶的左括号是否匹配。如果匹配，则弹出栈顶的左括号；如果不匹配，或者栈为空，说明括号不匹配。
function isBracketMatching(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (bracketPairs[char]) {
            // 左括号，入栈
            stack.push(char);
        } else {
            // 右括号，检查栈顶的左括号是否匹配
            const topBracket = stack.pop();
            if (!topBracket || bracketPairs[topBracket] !== char) {
                return false; // 不匹配
            }
        }
    }

    return stack.length === 0; // 栈为空则匹配，否则不匹配
}
// 使用示例：
console.log(isBracketMatching("(){}[]")); // true
console.log(isBracketMatching("({[})]")); // false