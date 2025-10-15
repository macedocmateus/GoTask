import { Dialog } from '@angular/cdk/dialog'
import { Injectable, inject } from '@angular/core'
import { TaskCommentsModalComponent } from '../components/task-comments-modal/task-comments-modal.component'
import { TaskFormModalComponent } from '../components/task-form-modal/task-form-modal.component'

@Injectable({
    providedIn: 'root',
})
export class ModalControllerService {
    private readonly _dialog = inject(Dialog)
    private readonly modalSizeOptions = {
        maxWidth: '620px',
        width: '95%',
    }

    openNewTaskModal() {
        return this._dialog.open(TaskFormModalComponent, {
            ...this.modalSizeOptions,
        })
    }

    openEditTaskModal() {
        return this._dialog.open(TaskFormModalComponent, {
            ...this.modalSizeOptions,
        })
    }

    openTaskCommentsModal() {
        return this._dialog.open(TaskCommentsModalComponent, {
            ...this.modalSizeOptions,
        })
    }
}
