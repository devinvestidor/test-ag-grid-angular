import { Component, OnInit } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../nodeservice';
import { TreeNode } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-treetable',
  standalone: true,
  imports: [TreeTableModule],
  providers: [NodeService],
  templateUrl: './treetable.component.html',
  styleUrl: './treetable.component.scss'
})
export class TreetableComponent implements OnInit {
  files!: TreeNode[];

  cols!: Column[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
      this.nodeService.getFilesystem().then((files) => (this.files = files));

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }

}
