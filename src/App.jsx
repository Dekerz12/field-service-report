import { useForm } from 'react-hook-form';

const formName = {
  name: 'entry.257232744',
  participate: 'entry.577149293',
  month: 'entry.520160626',
  study: 'entry.958918435',
  pioneer: 'entry.141941067',
  hours: 'entry.332821993',
};

function App() {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm();
  const { ref } = register(formName.month, { required: true });
  const pioneer = !!watch(formName.pioneer);
  const name = !!watch(formName.name);
  const participate = !!watch(formName.participate);
  const month = !!watch(formName.month);
  const study = !!watch(formName.study);

  const onSubmit = (e) => {
    if (!(pioneer && name && participate && month && study)) {
      e.preventDefault();
      trigger();
    }
  };
  return (
    <div className='h-[100dvh] flex flex-col items-center justify-center bg-primary'>
      <img
        src='data:image/png;base64,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'
        alt=''
        className='mx-auto'
        width={52}
        height={52}
      />
      <form
        className='flex flex-col gap-6 p-8 bg-primary'
        onSubmit={onSubmit}
        action='https://docs.google.com/forms/d/e/1FAIpQLSfujZqwCn-ccfGb0zeEhNQYRstUIUXA9_MEfbEoXjgEQqBsgg/formResponse'>
        {errors.entry?.length && (
          <span className='text-red-500'>Fill all the inputs *</span>
        )}
        <div className='flex flex-col'>
          <label className='label' htmlFor='name'>
            Name (First Name Last Name)
          </label>
          <input
            id='name'
            className='pl-2 border rounded'
            {...register(formName.name, { required: true })}
          />
        </div>
        <div className=''>
          {' '}
          <label className='label' htmlFor='participate'>
            Have you participated in any form of ministry?
          </label>
          <div id='participate' className='flex gap-8'>
            <div className=''>
              <input
                type='radio'
                id='participate-yes'
                value='Yes'
                className='pl-2 border rounded'
                {...register(formName.participate, { required: true })}
              />
              <label className='label' htmlFor='participate-yes'>
                Yes
              </label>
            </div>
            <div className=''>
              <input
                type='radio'
                id='participate-no'
                value='No'
                className='pl-2 border rounded'
                {...register(formName.participate, { required: true })}
              />
              <label className='label' htmlFor='participate-no'>
                No
              </label>
            </div>
          </div>
        </div>

        <select
          name={formName.month}
          ref={ref}
          defaultValue={new Date().toLocaleString('default', {
            month: 'long',
          })}>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>

        <div className='flex flex-col'>
          <label className='label' htmlFor='study'>
            Number of Bible Study
          </label>
          <input
            id='study'
            className='pl-2 border rounded'
            {...register(formName.study, { required: true })}
          />
        </div>
        <div className=''>
          {' '}
          <label className='label' htmlFor='pioneer'>
            Are you an auxiliary, regular or special pioneer?
          </label>
          <div id='pioneer' className='flex gap-8'>
            <div className=''>
              <input
                type='radio'
                id='pioneer-yes'
                value='Yes'
                className='pl-2 border rounded'
                {...register(formName.pioneer, { required: true })}
              />
              <label className='label' htmlFor='pioneer-yes'>
                Yes
              </label>
            </div>
            <div className=''>
              {' '}
              <input
                type='radio'
                id='pioneer-no'
                value='No'
                className='pl-2 border rounded'
                {...register(formName.pioneer, { required: true })}
              />
              <label className='label' htmlFor='pioneer-no'>
                No
              </label>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <label className='label' htmlFor='hours'>
            Number of Hours
          </label>
          <input
            id='hours'
            className='pl-2 border rounded'
            disabled={watch(formName.pioneer) !== 'Yes'}
            {...register(formName.hours)}
          />
        </div>

        <button
          className='px-4 py-2 rounded text-slate-200 bg-blue-950'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
