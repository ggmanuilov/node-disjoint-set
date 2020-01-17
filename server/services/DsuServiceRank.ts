interface SetItem {
  id: number;
  parent: number;
  size: number;
}

class DsuServiceRank {
  tree: Map<number, SetItem> = new Map<number, SetItem>();

  /**
   * Makes a new set by creating a new element
   * with a unique id and a parent pointer to itself.
   */
  make(x: number): void {
    this.tree.set(x, {
      id: x,
      parent: x,
      size: 0
    });
  }

  /**
   * Find(x) follows the chain of parent pointers from x up the tree
   * until it reaches a root element, whose parent is itself.
   * @param id
   */
  find(id: number): SetItem | null {
    let set = this.tree.get(id);
    if (!set) return null;
    return set.parent === id ? set : this.find(set.parent);
  }

  /**
   * Unite uses Find to determine the roots of the trees x and y belong to.
   * @param x
   * @param y
   */
  unite(x: number, y: number): void {
    let rx = this.find(x);
    let ry = this.find(y);

    if (!rx || !ry || rx.parent == ry.parent) return;

    if (rx.size < ry.size) {
      rx.parent = y;
      ry.size += rx.size;
    } else {
      ry.parent = x;
      rx.size += ry.size;
    }
  }

  /**
   * Check that two elements has one parent.
   * @param x
   * @param y
   */
  isUnite(x: number, y: number): number {
    let rx = this.find(x);
    let ry = this.find(y);
    if (!rx || !ry) {
      return 0;
    }

    return rx.parent === ry.parent ? 1 : 0;
  }
}

export default DsuServiceRank;
