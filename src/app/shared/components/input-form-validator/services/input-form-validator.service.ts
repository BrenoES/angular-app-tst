interface Config extends Record<string, string> {
  required: string;
  email: string;
  minlength: string;
}

export class InputFormValidatorService {
  static getValidatorErrorMessage(validatorName: string, validatorValue: any) {
    return this.config(validatorValue)[validatorName];
  }

  private static config = (value: any): Config => {
    return {
      required: 'Campo Obrigatório',
      email: 'Campo deve ser um email',
      minlength: `Campo deve ter pelo menos ${value.requiredLength} caracteres`,
    };
  };
}
