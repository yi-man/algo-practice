import { expect } from 'chai';
import 'mocha';
import { Heap } from './heap'

describe('heap test', () => {
  const arr = [1,10,5,2,3,98,100,4,7,8]

    const heap = new Heap(arr)

  it('create heap', () => {
    expect(heap.data).to.deep.equal([100,10,98,7,8,1,5,4,2,3])
  })

  it('insert', ()=>{
    heap.insert(101)

    expect(heap.data).to.deep.equal([101,100,98,7,10,1,5,4,2,3,8])
  })

  it('deleteMax', ()=>{
    heap.deleteMax()

    expect(heap.data).to.deep.equal([100,10,98,7,8,1,5,4,2,3])
  })

  it('sort', ()=>{
    const sorted = heap.sort()

    expect(sorted).to.deep.equal([1,2,3,4,5,7,8,10,98,100])
  })
});