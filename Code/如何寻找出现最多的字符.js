function findMostFrequentChar(str) {
    if (!str || str.length === 0) {
      return null; // 如果字符串为空，返回 null
    }
  
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;
  
    // 统计每个字符的出现次数
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
  
      // 更新出现次数最多的字符及次数
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
  
    return { character: maxChar, count: maxCount };
  }
  
  // 测试例子
  const inputString = 'abracadabra';
  const result = findMostFrequentChar(inputString);
  console.log(`出现最多的字符是 "${result.character}"，出现次数为 ${result.count}`);

