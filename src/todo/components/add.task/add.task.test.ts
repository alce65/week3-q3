import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { AddTask } from './add.task';
import { Task } from '../../model/task';

describe('Given the class AddTask', () => {
  describe('When we instantiate it with a valid selector', () => {
    document.body.innerHTML = '<div class="root"></div>';
    const addTaskMock = jest.fn();
    const addTask = new AddTask('.root', addTaskMock);
    const mockTask: Task = {
      title: 'Test title',
      owner: 'Test owner',
      isCompleted: false,
    };

    test('The component should be in the document', async () => {
      expect(addTask).toBeInstanceOf(AddTask);

      const formElement = screen.getByRole('form');
      expect(formElement).toBeInTheDocument();
      const inputElements = screen.getAllByRole('textbox');
      await userEvent.type(inputElements[0], mockTask.title);
      expect(inputElements[0]).toHaveValue(mockTask.title);
      await userEvent.type(inputElements[1], mockTask.owner);
      expect(inputElements[1]).toHaveValue(mockTask.owner);

      await fireEvent.submit(formElement);
      expect(addTaskMock).toHaveBeenCalledWith(mockTask);
    });
  });
});
