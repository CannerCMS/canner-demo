import * as React from "react";
import { Tree } from "antd";
import Router from "next/router";
import styled from "styled-components";
import { Heading } from "./styles/share";
const TreeNode = Tree.TreeNode;

const MenuContainer = styled.div`
  width: 100%;
  a {
    color: #333;
  }
`;

export default class SideBarMenu extends React.Component {
  state = {
    expandedKeys: []
  };

  onSelect = (selectedKeys, { selected }) => {
    if (!selected && this.state.expandedKeys[0].indexOf("parent") !== -1)
      return this.setState({ expandedKeys: [] });
    if (selectedKeys.length > 0 && selectedKeys[0].indexOf("parent") !== -1)
      return this.setState({ expandedKeys: selectedKeys });
    if (selectedKeys.length > 0) return Router.push(`/?cateId=${selectedKeys}`);
  };

  render() {
    const { categoryTree } = this.props;
    const { expandedKeys } = this.state;
    return (
      <MenuContainer>
        <Heading>
          <span className="sub-header">Category</span>
        </Heading>
        <Tree onSelect={this.onSelect} expandedKeys={expandedKeys}>
          <TreeNode title="All Product" key="all" />
          {categoryTree
            .map(cate => {
              if (!cate.category || cate.category.length === 0) {
                const findSecondCate = categoryTree.find(secondCate => {
                  return secondCate.category === cate._id;
                });
                if (findSecondCate) {
                  return (
                    <TreeNode title={cate.name} key={`parent_${cate._id}`}>
                      {categoryTree
                        .map(secondCate => {
                          if (secondCate.category === cate._id) {
                            return (
                              <TreeNode
                                isLeaf={true}
                                title={secondCate.name}
                                key={secondCate._id}
                              />
                            );
                          }
                          return false;
                        })
                        .filter(arg => arg)}
                    </TreeNode>
                  );
                } else {
                  return <TreeNode title={cate.name} key={`${cate._id}`} />;
                }
              }
              return false;
            })
            .filter(arg => arg)}
        </Tree>
      </MenuContainer>
    );
  }
}
