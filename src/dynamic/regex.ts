/**
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */

export class FakeRegex {
  isMatch(s: string, p: string) {
    const m = s.length;
    const n = p.length;

    const matches = function(i: number, j: number) {
        if (i === 0) {
            return false;
        }
        if (p[j - 1] === '.') {
            return true;
        }
        return s[i - 1] === p[j - 1];
    };
  
    const f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
    
    f[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                f[i][j] = f[i][j - 2];
                if (matches(i, j - 1)) {
                  f[i][j] = f[i][j] || f[i - 1][j];
                }
            } else {
                if (matches(i, j)) {
                  f[i][j] = f[i - 1][j - 1];
                }
            }
        }
    }

    return f[m][n];
  }

  isMatch2(s: string, p: string){
    s=" "+s;//防止该案例：""\n"c*"
    p=" "+p;
    const m=s.length;
    const n=p.length;

    const states = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));

    states[0][0]=true;

    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
          // 字符相等
            if(s[i-1]==p[j-1] || p[j-1]=='.'){
                states[i][j]=states[i-1][j-1];
            } else if(p[j-1]=='*'){
              // 如果s[i-1]不等于p[j-2] 且 p[j-2]不是'.'， 舍弃 j-1, j-2
                if(s[i-1]!=p[j-2] ) {
                  if (p[j-2]!='.') {
                    states[i][j]=states[i][j-2];
                  } else {
                    states[i][j] = states[i][j-2] || states[i-1][j]
                  }
                } else {
                    states[i][j]=states[i][j-1] || states[i][j-2];
                }
            }
        }
    }
    return states[m][n];
  }
}
