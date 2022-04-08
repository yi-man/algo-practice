class TrieNode {
  data: string;
  children: TrieNode[];
  isEndingChar: boolean;

  constructor(data: string){
      this.data = data;
      this.children = new Array(26);
      this.isEndingChar = false
  }
}

export class TrieTree {
  root: TrieNode;

  constructor(){
      this.root = new TrieNode('/')
  }

  getIndex(char: string) {
      return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  insert (text: string) {
      let node = this.root;
      for (const char of text) {
          const index = this.getIndex(char);
          if(!node.children[index]) {
              node.children[index] = new TrieNode(char);
          }
          node = node.children[index];
      }

      node.isEndingChar = true;
  }

  find (text: string) {
      let node = this.root;

      for(const char of text) {
          const index = this.getIndex(char);
          if(node.children[index]) {
              node = node.children[index];
          } else {
              return false;
          }
      }

      return node.isEndingChar;
  }
}