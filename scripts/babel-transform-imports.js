module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value.startsWith('lib-utils/')) {
          path.node.source.value = path.node.source.value.replace(/lib-utils/, '../../utils');
        }

        if (path.node.source.value.startsWith('lib-components/')) {
          path.node.source.value = path.node.source.value.replace(/lib-components/, '..');
        }

        if (path.node.source.value.endsWith('.less')) {
          path.node.source.value = path.node.source.value.replace(/\.less$/, '.css');
        }
      },
    },
  };
};
