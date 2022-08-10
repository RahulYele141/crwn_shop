import CategoryItem from '../category-item/category-item.componet';

import './category-menu.style.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className="category-menu">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
