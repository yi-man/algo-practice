module.exports = {

  meta: {

    docs: {

      description: '禁止块级注释',

      category: 'Stylistic Issues',

      recommended: true    

    }

  },

  create (context) {

    const sourceCode = context.getSourceCode()

    return {

      Program () {

        const comments = sourceCode.getAllComments()

        const blockComments = comments.filter(({ type }) => type === 'Block')

        blockComments.length && context.report({

          message: 'No block comments'

        })

      }

    }

  }

}
