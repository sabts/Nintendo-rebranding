import CustomSelect from "../ui/custom-select/CustomSelect";
import { TextInput } from "../ui/inputs/Inputs";

 const Form = ({ region, setRegion, register }) => {
        const regions = [
          { value: '', label: '-- Select a region --' },
          { value: 'america', label: 'America' },
          { value: 'asia', label: 'Asia' },
          { value: 'europe', label: 'Europe' },
        ];
      
        return (
          <div>
            <div>
              <label>Email</label>
              <TextInput type="email" {...register('email', { required: true })} />
            </div>
            <div>
              <label>Nickname</label>
              <TextInput  {...register('nickname', { required: true })} />
            </div>
            <div>
              <label>Name</label>
              <TextInput  {...register('name', { required: true })} />
            </div>
            <div>
              <label>Region</label>
              <CustomSelect
                options={regions}
                value={region}
                onChange={setRegion}
              />
            </div>
            <div>
              <label>Password</label>
              <TextInput  type="password" {...register('password', { required: true })} />
            </div>
          </div>
        );
};

export default Form