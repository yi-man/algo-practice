import { expect } from 'chai';
import 'mocha';
import { nQueen, nBacktraceQueen, NQueen } from './nQueen'

const queen8 =[
  [
    1, 0, 0, 0, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 1, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 1, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 0
  ]
]

describe('nQueen test', () => {

  it('8 queen', () => {
    const ret = nQueen(8)

    expect(ret).to.deep.equal(queen8)
  })

  it('8 backtrace queen', () => {
    const ret = nBacktraceQueen(8)

    expect(ret).to.deep.equal(queen8)
  })

  it('NQueen class test, use diagonals set', () => {
    const ret = new NQueen()

    const solutions = [
      'Q.......\n....Q...\n.......Q\n.....Q..\n..Q.....\n......Q.\n.Q......\n...Q....\n',
      'Q.......\n.....Q..\n.......Q\n..Q.....\n......Q.\n...Q....\n.Q......\n....Q...\n',
      'Q.......\n......Q.\n...Q....\n.....Q..\n.......Q\n.Q......\n....Q...\n..Q.....\n',
      'Q.......\n......Q.\n....Q...\n.......Q\n.Q......\n...Q....\n.....Q..\n..Q.....\n',
      '.Q......\n...Q....\n.....Q..\n.......Q\n..Q.....\nQ.......\n......Q.\n....Q...\n',
      '.Q......\n....Q...\n......Q.\nQ.......\n..Q.....\n.......Q\n.....Q..\n...Q....\n',
      '.Q......\n....Q...\n......Q.\n...Q....\nQ.......\n.......Q\n.....Q..\n..Q.....\n',
      '.Q......\n.....Q..\nQ.......\n......Q.\n...Q....\n.......Q\n..Q.....\n....Q...\n',
      '.Q......\n.....Q..\n.......Q\n..Q.....\nQ.......\n...Q....\n......Q.\n....Q...\n',
      '.Q......\n......Q.\n..Q.....\n.....Q..\n.......Q\n....Q...\nQ.......\n...Q....\n',
      '.Q......\n......Q.\n....Q...\n.......Q\nQ.......\n...Q....\n.....Q..\n..Q.....\n',
      '.Q......\n.......Q\n.....Q..\nQ.......\n..Q.....\n....Q...\n......Q.\n...Q....\n',
      '..Q.....\nQ.......\n......Q.\n....Q...\n.......Q\n.Q......\n...Q....\n.....Q..\n',
      '..Q.....\n....Q...\n.Q......\n.......Q\nQ.......\n......Q.\n...Q....\n.....Q..\n',
      '..Q.....\n....Q...\n.Q......\n.......Q\n.....Q..\n...Q....\n......Q.\nQ.......\n',
      '..Q.....\n....Q...\n......Q.\nQ.......\n...Q....\n.Q......\n.......Q\n.....Q..\n',
      '..Q.....\n....Q...\n.......Q\n...Q....\nQ.......\n......Q.\n.Q......\n.....Q..\n',
      '..Q.....\n.....Q..\n.Q......\n....Q...\n.......Q\nQ.......\n......Q.\n...Q....\n',
      '..Q.....\n.....Q..\n.Q......\n......Q.\nQ.......\n...Q....\n.......Q\n....Q...\n',
      '..Q.....\n.....Q..\n.Q......\n......Q.\n....Q...\nQ.......\n.......Q\n...Q....\n',
      '..Q.....\n.....Q..\n...Q....\nQ.......\n.......Q\n....Q...\n......Q.\n.Q......\n',
      '..Q.....\n.....Q..\n...Q....\n.Q......\n.......Q\n....Q...\n......Q.\nQ.......\n',
      '..Q.....\n.....Q..\n.......Q\nQ.......\n...Q....\n......Q.\n....Q...\n.Q......\n',
      '..Q.....\n.....Q..\n.......Q\nQ.......\n....Q...\n......Q.\n.Q......\n...Q....\n',
      '..Q.....\n.....Q..\n.......Q\n.Q......\n...Q....\nQ.......\n......Q.\n....Q...\n',
      '..Q.....\n......Q.\n.Q......\n.......Q\n....Q...\nQ.......\n...Q....\n.....Q..\n',
      '..Q.....\n......Q.\n.Q......\n.......Q\n.....Q..\n...Q....\nQ.......\n....Q...\n',
      '..Q.....\n.......Q\n...Q....\n......Q.\nQ.......\n.....Q..\n.Q......\n....Q...\n',
      '...Q....\nQ.......\n....Q...\n.......Q\n.Q......\n......Q.\n..Q.....\n.....Q..\n',
      '...Q....\nQ.......\n....Q...\n.......Q\n.....Q..\n..Q.....\n......Q.\n.Q......\n',
      '...Q....\n.Q......\n....Q...\n.......Q\n.....Q..\nQ.......\n..Q.....\n......Q.\n',
      '...Q....\n.Q......\n......Q.\n..Q.....\n.....Q..\n.......Q\nQ.......\n....Q...\n',
      '...Q....\n.Q......\n......Q.\n..Q.....\n.....Q..\n.......Q\n....Q...\nQ.......\n',
      '...Q....\n.Q......\n......Q.\n....Q...\nQ.......\n.......Q\n.....Q..\n..Q.....\n',
      '...Q....\n.Q......\n.......Q\n....Q...\n......Q.\nQ.......\n..Q.....\n.....Q..\n',
      '...Q....\n.Q......\n.......Q\n.....Q..\nQ.......\n..Q.....\n....Q...\n......Q.\n',
      '...Q....\n.....Q..\nQ.......\n....Q...\n.Q......\n.......Q\n..Q.....\n......Q.\n',
      '...Q....\n.....Q..\n.......Q\n.Q......\n......Q.\nQ.......\n..Q.....\n....Q...\n',
      '...Q....\n.....Q..\n.......Q\n..Q.....\nQ.......\n......Q.\n....Q...\n.Q......\n',
      '...Q....\n......Q.\nQ.......\n.......Q\n....Q...\n.Q......\n.....Q..\n..Q.....\n',
      '...Q....\n......Q.\n..Q.....\n.......Q\n.Q......\n....Q...\nQ.......\n.....Q..\n',
      '...Q....\n......Q.\n....Q...\n.Q......\n.....Q..\nQ.......\n..Q.....\n.......Q\n',
      '...Q....\n......Q.\n....Q...\n..Q.....\nQ.......\n.....Q..\n.......Q\n.Q......\n',
      '...Q....\n.......Q\nQ.......\n..Q.....\n.....Q..\n.Q......\n......Q.\n....Q...\n',
      '...Q....\n.......Q\nQ.......\n....Q...\n......Q.\n.Q......\n.....Q..\n..Q.....\n',
      '...Q....\n.......Q\n....Q...\n..Q.....\nQ.......\n......Q.\n.Q......\n.....Q..\n',
      '....Q...\nQ.......\n...Q....\n.....Q..\n.......Q\n.Q......\n......Q.\n..Q.....\n',
      '....Q...\nQ.......\n.......Q\n...Q....\n.Q......\n......Q.\n..Q.....\n.....Q..\n',
      '....Q...\nQ.......\n.......Q\n.....Q..\n..Q.....\n......Q.\n.Q......\n...Q....\n',
      '....Q...\n.Q......\n...Q....\n.....Q..\n.......Q\n..Q.....\nQ.......\n......Q.\n',
      '....Q...\n.Q......\n...Q....\n......Q.\n..Q.....\n.......Q\n.....Q..\nQ.......\n',
      '....Q...\n.Q......\n.....Q..\nQ.......\n......Q.\n...Q....\n.......Q\n..Q.....\n',
      '....Q...\n.Q......\n.......Q\nQ.......\n...Q....\n......Q.\n..Q.....\n.....Q..\n',
      '....Q...\n..Q.....\nQ.......\n.....Q..\n.......Q\n.Q......\n...Q....\n......Q.\n',
      '....Q...\n..Q.....\nQ.......\n......Q.\n.Q......\n.......Q\n.....Q..\n...Q....\n',
      '....Q...\n..Q.....\n.......Q\n...Q....\n......Q.\nQ.......\n.....Q..\n.Q......\n',
      '....Q...\n......Q.\nQ.......\n..Q.....\n.......Q\n.....Q..\n...Q....\n.Q......\n',
      '....Q...\n......Q.\nQ.......\n...Q....\n.Q......\n.......Q\n.....Q..\n..Q.....\n',
      '....Q...\n......Q.\n.Q......\n...Q....\n.......Q\nQ.......\n..Q.....\n.....Q..\n',
      '....Q...\n......Q.\n.Q......\n.....Q..\n..Q.....\nQ.......\n...Q....\n.......Q\n',
      '....Q...\n......Q.\n.Q......\n.....Q..\n..Q.....\nQ.......\n.......Q\n...Q....\n',
      '....Q...\n......Q.\n...Q....\nQ.......\n..Q.....\n.......Q\n.....Q..\n.Q......\n',
      '....Q...\n.......Q\n...Q....\nQ.......\n..Q.....\n.....Q..\n.Q......\n......Q.\n',
      '....Q...\n.......Q\n...Q....\nQ.......\n......Q.\n.Q......\n.....Q..\n..Q.....\n',
      '.....Q..\nQ.......\n....Q...\n.Q......\n.......Q\n..Q.....\n......Q.\n...Q....\n',
      '.....Q..\n.Q......\n......Q.\nQ.......\n..Q.....\n....Q...\n.......Q\n...Q....\n',
      '.....Q..\n.Q......\n......Q.\nQ.......\n...Q....\n.......Q\n....Q...\n..Q.....\n',
      '.....Q..\n..Q.....\nQ.......\n......Q.\n....Q...\n.......Q\n.Q......\n...Q....\n',
      '.....Q..\n..Q.....\nQ.......\n.......Q\n...Q....\n.Q......\n......Q.\n....Q...\n',
      '.....Q..\n..Q.....\nQ.......\n.......Q\n....Q...\n.Q......\n...Q....\n......Q.\n',
      '.....Q..\n..Q.....\n....Q...\n......Q.\nQ.......\n...Q....\n.Q......\n.......Q\n',
      '.....Q..\n..Q.....\n....Q...\n.......Q\nQ.......\n...Q....\n.Q......\n......Q.\n',
      '.....Q..\n..Q.....\n......Q.\n.Q......\n...Q....\n.......Q\nQ.......\n....Q...\n',
      '.....Q..\n..Q.....\n......Q.\n.Q......\n.......Q\n....Q...\nQ.......\n...Q....\n',
      '.....Q..\n..Q.....\n......Q.\n...Q....\nQ.......\n.......Q\n.Q......\n....Q...\n',
      '.....Q..\n...Q....\nQ.......\n....Q...\n.......Q\n.Q......\n......Q.\n..Q.....\n',
      '.....Q..\n...Q....\n.Q......\n.......Q\n....Q...\n......Q.\nQ.......\n..Q.....\n',
      '.....Q..\n...Q....\n......Q.\nQ.......\n..Q.....\n....Q...\n.Q......\n.......Q\n',
      '.....Q..\n...Q....\n......Q.\nQ.......\n.......Q\n.Q......\n....Q...\n..Q.....\n',
      '.....Q..\n.......Q\n.Q......\n...Q....\nQ.......\n......Q.\n....Q...\n..Q.....\n',
      '......Q.\nQ.......\n..Q.....\n.......Q\n.....Q..\n...Q....\n.Q......\n....Q...\n',
      '......Q.\n.Q......\n...Q....\nQ.......\n.......Q\n....Q...\n..Q.....\n.....Q..\n',
      '......Q.\n.Q......\n.....Q..\n..Q.....\nQ.......\n...Q....\n.......Q\n....Q...\n',
      '......Q.\n..Q.....\nQ.......\n.....Q..\n.......Q\n....Q...\n.Q......\n...Q....\n',
      '......Q.\n..Q.....\n.......Q\n.Q......\n....Q...\nQ.......\n.....Q..\n...Q....\n',
      '......Q.\n...Q....\n.Q......\n....Q...\n.......Q\nQ.......\n..Q.....\n.....Q..\n',
      '......Q.\n...Q....\n.Q......\n.......Q\n.....Q..\nQ.......\n..Q.....\n....Q...\n',
      '......Q.\n....Q...\n..Q.....\nQ.......\n.....Q..\n.......Q\n.Q......\n...Q....\n',
      '.......Q\n.Q......\n...Q....\nQ.......\n......Q.\n....Q...\n..Q.....\n.....Q..\n',
      '.......Q\n.Q......\n....Q...\n..Q.....\nQ.......\n......Q.\n...Q....\n.....Q..\n',
      '.......Q\n..Q.....\nQ.......\n.....Q..\n.Q......\n....Q...\n......Q.\n...Q....\n',
      '.......Q\n...Q....\nQ.......\n..Q.....\n.....Q..\n.Q......\n......Q.\n....Q...\n'
    ]

    expect(ret.solveNQueens(8)).to.deep.equal(solutions)
  })
});
