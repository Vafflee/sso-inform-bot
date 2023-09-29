import { RequiredType, AssigneeType } from "../notion/types";

export const requiredMap = {
  [RequiredType.TEXT]: {
    role: AssigneeType.writer,
    text: '├─ 🖋️ Требуется текст\n'
  },
  [RequiredType.DESIGN]: {
    role: AssigneeType.designer,
    text: '├─ 🎨 Требуется афиша\n'
  },
  [RequiredType.PHOTO]: {
    role: AssigneeType.photographer,
    text: '├─ 📸 Требуется фотограф\n'
  },
  [RequiredType.EDIT]: {
    role: AssigneeType.editor,
    text: '├─ 🎥 Требуется монтажер\n'
  }
}