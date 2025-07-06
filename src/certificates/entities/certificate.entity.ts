import { Category } from '../../categories/entities/category.entity';
import { Technology } from '../../technologies/entities/technology.entity';

export class Certificate {
  id: number;
  name: string;
  pdfUrl: string;
  imgUrl: string;
  entityName: string;
  completed: Date;
  category: Category;
  technologies: Technology[];
}
