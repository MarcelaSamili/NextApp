'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
//O editor vem dessa biblioteca, para saber mais sobre ela
import MDEditor from '@uiw/react-md-editor';
// acesse: https://www.npmjs.com/package/@uiw/react-md-editor
import React, { useActionState, useState } from 'react';
import { formSchema } from '@/lib/validation';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState(' ');
  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        link: formData.get('link') as string,
        pitch,
      };
      await formSchema.parseAsync(formValues);

      console.log(formValues);

      //const result = await createIdea(prevState, formData, pitch)

      //console.log(result);

      /* if (result.status == 'SUCCESS') {
        toast({
          title: 'Success',
          description: 'Your startup pith has been created successfuly',
        });
        router.push(`/statup/${result.id}`);
      }
      return result;*/
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast({
          title: 'Error',
          description: 'Please check your inputs and try again',
          variant: 'destructive',
        });

        return { ...prevState, error: 'Validation faield', status: 'ERROR' };
      }

      toast({
        title: 'Error',
        description: 'Please check your inputs and try again',
        variant: 'destructive',
      });

      return {
        ...prevState,
        error: 'An unexpected error has occured',
        status: 'ERROR',
      };

      /*""error.flatten()"" retorna um objeto com os erros organizados. 
    ""fieldErrors""" contém os erros específicos de cada campo do formulário.*/
    } finally {
      /** */
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: '',
    status: 'INITIAL',
  });

  return (
    <form action={formAction => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name=""
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>
      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category(Tech, Health, Education...)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>
      <div>
        <label htmlFor="link" className="startup-form_label">
          Image Url
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>
      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={value => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: 'hidden' }}
          textareaProps={{
            placeholder:
              'Briefly describe your idea and what problem it solves',
          }}
          previewOptions={{
            disallowedElements: ['style'],
          }}
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
      <Button
        type="submit"
        className="startup-form_btn text-white "
        disabled={isPending}
        variant="contained"
        endIcon={<SendIcon className="size-6 ml-3" />}
      >
        {isPending ? 'Submitting...' : 'Submit your pitch'}
      </Button>
    </form>
  );
};

export default StartupForm;
