import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Zod = () => {
  const schema = {
    first_name: z.string().min(3, "Not enough letters"),
    last_name:z.string().min(3, "Not enough letters"),
    checkbox: z.boolean({
      required_error: "isActive is required",
      invalid_type_error: "isActive must be a boolean",
    }),
  };
  const { register, handleSubmit, errors, reset, control } = useForm({
    defaultValues: { checkbox: true, first_name: "Ziad", last_name:""  },
    resolver: zodResolver(z.object(schema)),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="font-bold text-8xl">ZOD</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          label="first_name"
          className="bg-gray-200 border border-1"
          {...register("first_name", { required: true, maxLength: 20 })}
        />

        <Controller
          name="last_name"
          label="last_name"
          control={control}
          render={({ field }) => (
            <TextField {...field} id="outlined-basic" label="Outlined" variant="outlined" />
          )}
        />

        <Controller
          name="checkbox"
          label="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControlLabel {...field} control={<Checkbox />} label="Label" />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Zod;
